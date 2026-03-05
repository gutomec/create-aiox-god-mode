import fse from 'fs-extra';
import path from 'node:path';
import { getToolPaths, resolveToolKey } from './tool-paths.js';

/**
 * Converte skills do formato Claude Code para a ferramenta de IA selecionada.
 *
 * Todas as ferramentas que suportam skills usam o padrão Agent Skills
 * (agentskills.io) com SKILL.md — a conversão é apenas uma cópia
 * para o diretório correto da ferramenta.
 *
 * @param {string} sourceDir - Diretório fonte das skills (.claude/skills/)
 * @param {string} projectDir - Diretório raiz do projeto
 * @param {string} aiTool - Ferramenta de IA selecionada
 * @returns {Promise<string|null>} Path do diretório de destino ou null se não suporta skills
 */
export async function convertSkills(sourceDir, projectDir, aiTool) {
  const resolved = resolveToolKey(aiTool);
  const toolPaths = getToolPaths(resolved);

  if (!toolPaths.skills) {
    // Ferramenta não suporta skills (ex: github-copilot, antigravity)
    return null;
  }

  const targetDir = path.join(projectDir, toolPaths.skills);

  if (resolved === 'claude-code') {
    // Claude Code: skills já estão no lugar certo
    return targetDir;
  }

  // Todas as outras ferramentas: copiar para o diretório correto
  if (await fse.pathExists(sourceDir)) {
    await fse.ensureDir(targetDir);
    await fse.copy(sourceDir, targetDir);
  }

  return targetDir;
}

/**
 * Converte a configuração MCP do formato Claude Code para a ferramenta selecionada.
 *
 * - Claude Code: .mcp.json (JSON)
 * - Gemini: global only — emite aviso
 * - Antigravity: global only — emite aviso
 * - GitHub Copilot: não suporta MCP per-project — emite aviso
 * - Codex: .codex/config.toml [mcp_servers.*] (TOML)
 * - Cursor: .cursor/mcp.json (JSON, formato similar a Claude Code)
 *
 * @param {object} mcpConfig - Configuração MCP em formato Claude Code
 * @param {string} projectDir - Diretório raiz do projeto
 * @param {string} aiTool - Ferramenta de IA selecionada
 * @returns {Promise<{ written: boolean, path: string|null, warning: string|null }>}
 */
export async function convertMcpConfig(mcpConfig, projectDir, aiTool) {
  const resolved = resolveToolKey(aiTool);
  const toolPaths = getToolPaths(resolved);

  if (resolved === 'claude-code') {
    const mcpPath = path.join(projectDir, toolPaths.mcp);
    await fse.writeJson(mcpPath, mcpConfig, { spaces: 2 });
    return { written: true, path: mcpPath, warning: null };
  }

  if (resolved === 'gemini' || resolved === 'antigravity') {
    return {
      written: false,
      path: null,
      warning: `${resolved} não suporta MCP per-project. Configure manualmente no diretório global.`,
    };
  }

  if (resolved === 'github-copilot') {
    return {
      written: false,
      path: null,
      warning: 'GitHub Copilot não suporta MCP per-project. Configure manualmente nas settings do VS Code.',
    };
  }

  if (resolved === 'codex') {
    // Codex: converter JSON → TOML no .codex/config.toml
    const configDir = path.join(projectDir, '.codex');
    await fse.ensureDir(configDir);
    const configPath = path.join(configDir, 'config.toml');

    let toml = '';
    const servers = mcpConfig.mcpServers || {};
    for (const [name, config] of Object.entries(servers)) {
      toml += `[mcp_servers.${name}]\n`;
      if (config.command) toml += `command = "${config.command}"\n`;
      if (config.args) toml += `args = [${config.args.map((a) => `"${a}"`).join(', ')}]\n`;
      if (config.env) {
        toml += `[mcp_servers.${name}.env]\n`;
        for (const [k, v] of Object.entries(config.env)) {
          toml += `${k} = "${v}"\n`;
        }
      }
      toml += '\n';
    }

    // Merge com config.toml existente se houver
    let existingContent = '';
    if (await fse.pathExists(configPath)) {
      existingContent = await fse.readFile(configPath, 'utf-8');
    }
    await fse.writeFile(configPath, existingContent + toml, 'utf-8');
    return { written: true, path: configPath, warning: null };
  }

  if (resolved === 'cursor') {
    // Cursor: .cursor/mcp.json (formato similar a Claude Code)
    const cursorDir = path.join(projectDir, '.cursor');
    await fse.ensureDir(cursorDir);
    const mcpPath = path.join(cursorDir, 'mcp.json');
    await fse.writeJson(mcpPath, mcpConfig, { spaces: 2 });
    return { written: true, path: mcpPath, warning: null };
  }

  // Fallback: escreve como Claude Code
  const mcpPath = path.join(projectDir, '.mcp.json');
  await fse.writeJson(mcpPath, mcpConfig, { spaces: 2 });
  return { written: true, path: mcpPath, warning: null };
}

/**
 * Converte CLAUDE.md para o nome de instruções da ferramenta selecionada.
 *
 * @param {string} projectDir - Diretório raiz do projeto
 * @param {string} aiTool - Ferramenta de IA selecionada
 */
export async function convertProjectInstructions(projectDir, aiTool) {
  const resolved = resolveToolKey(aiTool);
  const toolPaths = getToolPaths(resolved);
  const claudeMd = path.join(projectDir, 'CLAUDE.md');
  const targetName = toolPaths.instructions;

  if (resolved === 'claude-code' || targetName === 'CLAUDE.md') {
    return; // Nada a fazer
  }

  const targetPath = path.join(projectDir, targetName);

  if (await fse.pathExists(claudeMd)) {
    // Garantir que o diretório pai existe (ex: .github/copilot-instructions.md)
    await fse.ensureDir(path.dirname(targetPath));
    await fse.copy(claudeMd, targetPath);
    // Manter CLAUDE.md original se AGENTS.md for o target (Codex/Cursor/Antigravity suportam ambos)
    if (targetName !== 'AGENTS.md') {
      await fse.remove(claudeMd);
    }
  }
}

/**
 * Converte rules de Claude Code para o formato da ferramenta.
 *
 * - Claude Code → Gemini: paths: → globs: (plain markdown com frontmatter convertido)
 * - Claude Code → Codex: Codex não usa rules dir — ignorar
 * - Claude Code → Cursor: paths: → globs: + alwaysApply: (.mdc format)
 * - Claude Code → GitHub Copilot: sem suporte a rules — ignorar
 * - Claude Code → Antigravity: copiar para .antigravity/rules/
 *
 * @param {string} sourceDir - Diretório fonte (.claude/rules/)
 * @param {string} projectDir - Diretório raiz do projeto
 * @param {string} aiTool - Ferramenta de IA selecionada
 */
export async function convertRules(sourceDir, projectDir, aiTool) {
  const resolved = resolveToolKey(aiTool);

  if (resolved === 'claude-code' || !(await fse.pathExists(sourceDir))) {
    return;
  }

  const toolPaths = getToolPaths(resolved);

  // Ferramentas sem suporte a rules
  if (!toolPaths.rules) {
    return;
  }

  const targetDir = path.join(projectDir, toolPaths.rules);
  await fse.ensureDir(targetDir);

  const entries = await fse.readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md')) continue;

    const content = await fse.readFile(path.join(sourceDir, entry.name), 'utf-8');

    if (resolved === 'gemini') {
      // Gemini: converter paths: → globs: (regras são plain markdown com frontmatter)
      const converted = convertClaudeToGeminiRule(content);
      await fse.writeFile(path.join(targetDir, entry.name), converted, 'utf-8');
    } else if (resolved === 'cursor') {
      // Cursor: converter paths: → globs: + adicionar alwaysApply: (.mdc format)
      const converted = convertClaudeToCursorRule(content);
      const mdcName = entry.name.replace('.md', '.mdc');
      await fse.writeFile(path.join(targetDir, mdcName), converted, 'utf-8');
    } else if (resolved === 'antigravity') {
      // Antigravity: copiar para .antigravity/rules/
      const converted = convertClaudeToGeminiRule(content);
      await fse.writeFile(path.join(targetDir, entry.name), converted, 'utf-8');
    }
    // codex e github-copilot: já retornaram acima (rules === null)
  }
}

/**
 * Converte frontmatter de rule Claude Code → Gemini/Antigravity.
 * Claude usa paths:, Gemini usa globs: ou plain markdown.
 *
 * @param {string} content - Conteúdo da rule em formato Claude Code
 * @returns {string} Conteúdo convertido
 */
function convertClaudeToGeminiRule(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) return content; // Sem frontmatter, retorna como está

  const yaml = fmMatch[1];
  const body = fmMatch[2];

  // Extrair paths: do Claude Code
  const pathsMatch = yaml.match(/^paths:\s*(.+)$/m);
  if (!pathsMatch) return content; // Sem paths:, retorna como está

  const pathsValue = pathsMatch[1].trim();

  // Converter para formato Gemini
  return `---\nglobs: ${pathsValue}\nalwaysApply: false\n---\n${body}`;
}

/**
 * Converte frontmatter de rule Claude Code → Cursor (.mdc format).
 * Claude usa paths:, Cursor usa globs: + alwaysApply: + description:.
 *
 * @param {string} content - Conteúdo da rule em formato Claude Code
 * @returns {string} Conteúdo convertido para Cursor (.mdc)
 */
function convertClaudeToCursorRule(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) {
    // Sem frontmatter = always-on no Claude = alwaysApply: true no Cursor
    return `---\nalwaysApply: true\n---\n${content}`;
  }

  const yaml = fmMatch[1];
  const body = fmMatch[2];

  const pathsMatch = yaml.match(/^paths:\s*(.+)$/m);
  if (!pathsMatch) {
    return `---\nalwaysApply: true\n---\n${body}`;
  }

  const pathsValue = pathsMatch[1].trim();
  return `---\nglobs: ${pathsValue}\nalwaysApply: false\n---\n${body}`;
}
