<h1 align="center">
  ⚡ create-aiox-god-mode
</h1>

<p align="center">
  <strong>Instala o Synkra AIOX com God Mode — uma skill que orquestra o framework inteiro via CLI de IA.</strong><br>
  <sub>Um comando. AIOX + God Mode + GSD + oh-my-claudecode + 3 MCPs. Pronto para usar.</sub>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-aiox-god-mode"><img src="https://img.shields.io/npm/v/create-aiox-god-mode?style=flat-square&color=cb3837&label=npm" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/create-aiox-god-mode"><img src="https://img.shields.io/npm/dm/create-aiox-god-mode?style=flat-square&color=blue" alt="npm downloads"></a>
  <a href="https://github.com/gutomec/create-aiox-god-mode/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/create-aiox-god-mode?style=flat-square&color=green" alt="license"></a>
  <img src="https://img.shields.io/node/v/create-aiox-god-mode?style=flat-square&color=339933" alt="node version">
</p>

<p align="center">
  <a href="#-o-que-este-cli-faz">O Que Faz</a> ·
  <a href="#-início-rápido">Início Rápido</a> ·
  <a href="#-pipeline-de-instalação">Pipeline</a> ·
  <a href="#-comandos">Comandos</a> ·
  <a href="#-god-mode-skill">God Mode</a>
</p>

<br>

<p align="center">
  <sub>
    Baseado no <a href="https://github.com/SynkraAI/aios-core"><strong>Synkra AIOS</strong></a> por <a href="https://github.com/Pedrovaleriolopez"><strong>Pedro Valério</strong></a> · Construído sobre o <a href="https://docs.anthropic.com/en/docs/claude-code"><strong>Claude Code</strong></a> da <a href="https://www.anthropic.com">Anthropic</a>
  </sub>
</p>

---

### 🏆 Créditos e Agradecimentos

> **Este projeto é construído sobre o [Synkra AIOS](https://github.com/SynkraAI/aios-core)**, o framework open-source de orquestração de agentes de IA para desenvolvimento full-stack criado por **[Pedro Valério](https://github.com/Pedrovaleriolopez)** e mantido pela organização **[SynkraAI](https://github.com/SynkraAI)** (1.850+ stars no GitHub). Sem o trabalho do Pedro e da comunidade Synkra, este projeto não existiria.

Este projeto existe graças ao trabalho incrível de diversas comunidades e criadores open-source:

| Projeto | Autor / Organização | Contribuição |
|---------|---------------------|--------------|
| [**Synkra AIOS**](https://github.com/SynkraAI/aios-core) | [**Pedro Valério**](https://github.com/Pedrovaleriolopez) / [SynkraAI](https://github.com/SynkraAI) | Framework core — toda a arquitetura de agentes, constitution, workflows, tasks e templates. Instalado via `npx aiox-core init` |
| [squads.sh](https://squads.sh) | [gutomec](https://github.com/gutomec) | Plataforma de gerenciamento de squads para projetos AIOS |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | [Anthropic](https://www.anthropic.com) | Motor de IA que torna tudo possível — agentes, skills e MCP rodam sobre o Claude Code |
| [Vercel Labs Skills](https://github.com/vercel-labs/skills) | [Vercel](https://github.com/vercel-labs) | Skill `find-skills` — busca de skills sob demanda (instalada pelo AIOX) |
| [nano-banana-pro](https://www.npmjs.com/package/@rafarafarafa/nano-banana-pro-mcp) | [rafarafarafa](https://github.com/rafarafarafa) | Servidor MCP para geração de imagens com Gemini |
| [Context7](https://github.com/upstash/context7-mcp) | [Upstash](https://github.com/upstash) | Servidor MCP para documentação de bibliotecas ao vivo |
| [21st.dev Magic](https://github.com/21st-dev/magic) | [21st.dev](https://github.com/21st-dev) | Servidor MCP para busca e geração de componentes UI |
| [Get Shit Done](https://www.npmjs.com/package/get-shit-done-cc) | [Lex Christopherson](https://github.com/glittercowboy) | Framework GSD para gestão de projetos com Claude Code |
| [oh-my-claudecode](https://www.npmjs.com/package/oh-my-claude-sisyphus) | [Yeachan Heo](https://github.com/Yeachan-Heo) | Orquestração multi-agente para Claude Code |

> [!NOTE]
> `create-aiox-god-mode` é um **instalador e orquestrador** — ele executa os instaladores de cada projeto listado acima e adiciona a skill God Mode. Todo o crédito pelo framework Synkra AIOS pertence a [Pedro Valério](https://github.com/Pedrovaleriolopez) e à organização [SynkraAI](https://github.com/SynkraAI). O crédito pelas skills, MCPs e ferramentas pertence aos respectivos autores. Se você é autor de algum projeto listado e deseja ajustes na atribuição, [abra uma issue](https://github.com/gutomec/create-aiox-god-mode/issues).

---

```bash
npx create-aiox-god-mode meu-projeto
```

> [!NOTE]
> Este pacote é equivalente ao [`create-aios-god-mode`](https://github.com/gutomec/create-aios-god-mode) com branding **Synkra AIOX**. Ambos instalam o mesmo sistema.

---

## 🎯 O Que Este CLI Faz

Este CLI é um **instalador** que executa 3 instalações independentes e adiciona uma skill:

<table>
<tr>
<td align="center" width="25%">
<h3>🏗️ AIOX Framework</h3>
<sub>Executa <code>npx aiox-core init</code> que instala o framework Synkra AIOX com agentes, workflows, tasks, constitution e templates. <strong>O AIOX tem seus próprios prompts</strong> (idioma, IDEs, tech preset).</sub>
</td>
<td align="center" width="25%">
<h3>⚡ God Mode Skill</h3>
<sub>Adiciona a skill <code>aiox-god-mode</code> para cada IDE selecionada. É uma skill que permite <strong>controlar todo o framework AIOX via CLI de IA</strong> — criar agentes, rodar workflows, gerenciar stories.</sub>
</td>
<td align="center" width="25%">
<h3>🚀 GSD + OMC</h3>
<sub>Executa <code>npx get-shit-done-cc --local</code> e <code>npx oh-my-claude-sisyphus install</code> com suas instalações padrão.</sub>
</td>
<td align="center" width="25%">
<h3>🔌 3 Servidores MCP</h3>
<sub>Configura <code>nano-banana-pro</code>, <code>context7</code> e <code>21st-dev</code> para cada IDE selecionada.</sub>
</td>
</tr>
</table>

**O que este CLI NÃO faz:**
- Não cria os agentes de IA — isso é feito pelo AIOX (`aiox-core`)
- Não instala squads — cria apenas o diretório `squads/` vazio
- Não faz prompts interativos — os prompts vêm do `aiox-core init`

---

## 🚀 Início Rápido

**1.** Crie seu projeto

```bash
npx create-aiox-god-mode meu-projeto
```

**2.** Entre no diretório

```bash
cd meu-projeto
```

**3.** Ative o God Mode

```bash
claude
# depois digite: /aiox-god-mode
```

> [!IMPORTANT]
> O [Claude Code](https://docs.anthropic.com/en/docs/claude-code) precisa estar instalado para usar o God Mode. Instale com `npm install -g @anthropic-ai/claude-code`.

---

## 📦 Pipeline de Instalação

O CLI executa **8 etapas sequenciais**. Apenas a etapa 3 é código próprio deste CLI — as demais delegam para instaladores de terceiros:

| Etapa | O Que Faz | Quem Faz |
|:-----:|-----------|----------|
| 1 | 🔍 **Validar ambiente** — Node.js ≥ 18, nome do projeto (kebab-case), diretório vazio, rede | CLI |
| 2 | 🏗️ **Instalar AIOX** — Executa `npx aiox-core init <nome>`. O AIOX faz seus próprios prompts (idioma, IDEs, tech preset) e cria toda a estrutura do framework | `aiox-core` |
| 3 | ⚡ **Adicionar God Mode** — Copia a skill `aiox-god-mode` (1 SKILL.md + 8 referências + 1 rule + 1 settings.json) para cada IDE selecionada pelo usuário na etapa 2 | CLI |
| 4 | 🔌 **Configurar MCPs** — Escreve configs de 3 servidores MCP (`nano-banana-pro`, `context7`, `21st-dev`) para cada IDE selecionada | CLI |
| 5 | 🚀 **Instalar GSD** — Executa `npx get-shit-done-cc --local` (instalação padrão) | `get-shit-done-cc` |
| 6 | 🔧 **Instalar oh-my-claudecode** — Executa `npx oh-my-claude-sisyphus install` (instalação padrão) | `oh-my-claude-sisyphus` |
| 7 | 🧹 **Converter para IDEs** — Converte skills, rules e instruções para o formato de cada IDE selecionada. Cria diretório `squads/` vazio | CLI |
| 8 | ✅ **Finalizar** — `npm install`, cria `.env.example`, `git init` + commit inicial | CLI |

### IDEs suportadas

A etapa 2 (`aiox-core init`) pergunta ao usuário quais IDEs usar. O CLI então instala God Mode e MCPs para cada uma:

| IDE | Skills | Rules | MCPs | Instruções |
|-----|:------:|:-----:|:----:|:----------:|
| **Claude Code** | `.claude/skills/` | `.claude/rules/` | `.mcp.json` | `CLAUDE.md` |
| **Codex** | `.codex/skills/` | — | `.codex/config.toml` | `AGENTS.md` |
| **Gemini CLI** | `.gemini/skills/` | `.gemini/rules/` | — | `GEMINI.md` |
| **Cursor** | `.cursor/skills/` | `.cursor/rules/` | `.cursor/mcp.json` | `AGENTS.md` |
| **GitHub Copilot** | — | — | — | `.github/copilot-instructions.md` |
| **AntiGravity** | — | `.antigravity/rules/` | — | `AGENTS.md` |

> [!NOTE]
> MCPs per-project só são suportados por Claude Code, Codex e Cursor. Para as demais IDEs, o CLI emite um aviso.

---

## 🛠️ Comandos

### `init` (padrão)

Cria um novo projeto com AIOX + God Mode + GSD + OMC.

```bash
npx create-aiox-god-mode meu-projeto
```

### `update`

Compara a versão do God Mode instalada com a versão bundled no CLI. Se houver versão mais nova, reinstala a skill.

```bash
cd meu-projeto
npx create-aiox-god-mode update
```

> [!TIP]
> Use `npx create-aiox-god-mode@latest update` para garantir que está usando a versão mais recente do CLI.

### `doctor`

Executa 8 verificações de saúde no projeto:

```bash
cd meu-projeto
npx create-aiox-god-mode doctor
```

| # | Verificação | Crítica |
|---|-------------|:-------:|
| 1 | Node.js ≥ 18.0.0 | Não |
| 2 | Projeto AIOX (`core-config.yaml` existe) | **Sim** |
| 3 | God Mode (`SKILL.md` existe) | **Sim** |
| 4 | Config do Claude (`CLAUDE.md`) | Não |
| 5 | Settings (`settings.json`) | Não |
| 6 | Rules (pelo menos 1 `.md` em `rules/`) | Não |
| 7 | Git inicializado | Não |
| 8 | Rede (GitHub API acessível) | Não |

### `add-squad`

Adiciona um squad ao projeto via `npx squads add`.

```bash
cd meu-projeto
npx create-aiox-god-mode add-squad backend
```

---

<details>
<summary><h2>⚡ God Mode Skill</h2></summary>

O God Mode é uma **skill** — um arquivo markdown (`SKILL.md` + 8 referências) que instrui o Claude Code (ou outra IDE) a operar o framework AIOX. Não é um binário, não é um servidor — é um conjunto de instruções que a IA segue.

### O que a skill faz

1. **Classifica intent** — qualquer pedido é classificado como OPERATE, CREATE ou CONFIGURE
2. **Roteia para agentes** — direciona para o agente AIOX correto (@dev, @qa, @architect, etc.)
3. **Ativa workflows** — SDC (Story Development Cycle), QA Loop, Spec Pipeline, Brownfield Discovery
4. **Cria componentes** — agentes, tasks, workflows, squads, checklists, templates, rules, data files
5. **Aplica governance** — enforça a Constitution do AIOX (6 artigos), lifecycle de stories, delegation matrix

### Quick Commands

**Criação:**
`*create-agent` · `*create-task` · `*create-workflow` · `*create-squad` · `*create-checklist` · `*create-template` · `*create-rule` · `*create-data` · `*configure`

**Operação:**
`*route` · `*agents` · `*workflows` · `*constitution` · `*lifecycle` · `*matrix` · `*navigate` · `*orchestrate` · `*diagnose` · `*sprint`

### Agentes AIOX (instalados pelo `aiox-core`)

| Agente | Persona | Função |
|--------|---------|--------|
| `@dev` | **Dex** | Desenvolvedor Full Stack |
| `@qa` | **Quinn** | Arquiteto de Testes |
| `@architect` | **Aria** | Arquiteto Técnico |
| `@pm` | **Morgan** | Product Manager |
| `@po` | **Pax** | Product Owner |
| `@sm` | **River** | Scrum Master |
| `@analyst` | **Atlas** | Analista de Negócios |
| `@data-engineer` | **Dara** | Especialista em Banco de Dados |
| `@ux-design-expert` | **Uma** | Designer UX/UI |
| `@devops` | **Gage** | Gerente de Repositório |
| `@aios-master` | **Orion** | Orquestrador do Framework |

> Estes agentes são criados pelo `aiox-core`, não por este CLI. O God Mode apenas sabe como roteá-los.

### Arquivos da skill

```
aiox-god-mode/
├── SKILL.md                              # Skill principal (~245 linhas)
└── references/
    ├── agent-creation.md                 # Schema YAML para criar agentes
    ├── agent-matrix.md                   # Referência de comandos dos 11 agentes
    ├── component-templates.md            # Guias para checklists, templates, data, rules
    ├── framework-map.md                  # Mapa completo de paths e boundaries
    ├── squad-creation.md                 # Estrutura e schema de squads
    ├── task-creation.md                  # Schema YAML para tasks
    ├── workflow-creation.md              # Schema YAML para workflows
    └── workflow-playbooks.md             # Playbooks para SDC, QA Loop, Spec, Brownfield
```

</details>

---

## 🔌 Servidores MCP

Configurados pelo CLI para cada IDE selecionada:

| Servidor | Pacote | Propósito |
|----------|--------|-----------|
| **nano-banana-pro** | `@rafarafarafa/nano-banana-pro-mcp` | Geração de imagens com IA via Gemini |
| **context7** | `@upstash/context7-mcp` | Consulta de documentação de bibliotecas ao vivo |
| **21st-dev** | `@21st-dev/magic` | Busca e geração de componentes UI |

> [!NOTE]
> O `nano-banana-pro` requer a variável de ambiente `GEMINI_API_KEY`. Adicione-a ao seu arquivo `.env`.

---

## 📁 Estrutura do Projeto (após instalação)

```
meu-projeto/
├── .claude/                              # Claude Code (criado pelo aiox-core)
│   ├── settings.json                     # Permissões + deny rules (merge do CLI)
│   ├── rules/                            # Regras de workflow (aiox-core + CLI)
│   ├── skills/
│   │   ├── aiox-god-mode/                # ⚡ Adicionado por este CLI
│   │   │   ├── SKILL.md
│   │   │   ├── .version
│   │   │   └── references/ (8 arquivos)
│   │   └── (outras skills do aiox-core)
│   └── CLAUDE.md                         # Instruções do projeto (aiox-core)
├── .aiox-core/                           # Framework AIOX (criado pelo aiox-core)
│   ├── constitution.md
│   ├── core/
│   ├── development/
│   │   ├── tasks/
│   │   ├── templates/
│   │   ├── checklists/
│   │   └── workflows/
│   └── data/
├── .mcp.json                             # Servidores MCP (configurado pelo CLI)
├── docs/                                 # (criado pelo aiox-core)
├── squads/                               # Diretório vazio (criado pelo CLI)
├── .env.example                          # Template de variáveis de ambiente (CLI)
├── package.json
└── README.md
```

> Se outras IDEs foram selecionadas, haverá diretórios adicionais (`.codex/`, `.gemini/`, `.cursor/`, `.antigravity/`, `.github/`, etc.) com as skills e configs convertidas.

---

## 📋 Requisitos

| Requisito | Versão | Obrigatório |
|-----------|--------|:-----------:|
| **Node.js** | ≥ 18.0.0 | ✅ |
| **Git** | Qualquer recente | ✅ |
| **GitHub CLI** (`gh`) | Qualquer recente | Recomendado |
| **Claude Code** | Mais recente | ✅ |

---

## 🔗 Links Relacionados

- [Synkra AIOS](https://github.com/SynkraAI/aios-core) — O framework de Sistema Orquestrado por IA, por [Pedro Valério](https://github.com/Pedrovaleriolopez)
- [squads.sh](https://squads.sh) — Gerenciamento de squads para projetos AIOS
- [create-aios-god-mode](https://github.com/gutomec/create-aios-god-mode) — CLI original com branding AIOS
- [aios-god-mode-template](https://github.com/gutomec/aios-god-mode-template) — Template AIOS (bundled no CLI desde v3.0.5)
- [aiox-god-mode-template](https://github.com/gutomec/aiox-god-mode-template) — Template AIOX (bundled no CLI desde v3.0.5)
- [Get Shit Done](https://www.npmjs.com/package/get-shit-done-cc) — Framework de gestão de projetos
- [oh-my-claudecode](https://www.npmjs.com/package/oh-my-claude-sisyphus) — Orquestração multi-agente

---

## 👨‍💻 Contribuidores

Obrigado a essas pessoas incríveis:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/gutomec">
          <img src="https://avatars.githubusercontent.com/u/4014465?v=4&s=80" width="80px;" alt="Guto"/>
          <br /><sub><b>Guto</b></sub>
        </a>
        <br />
        <sub>💻 Código · 📖 Docs · 🚧 Manutenção · 📆 Gestão</sub>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/Renatoz">
          <img src="https://avatars.githubusercontent.com/u/189273218?v=4&s=80" width="80px;" alt="Renato"/>
          <br /><sub><b>Renato</b></sub>
        </a>
        <br />
        <sub>💻 Código</sub>
      </td>
    </tr>
  </tbody>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

Contribuições de qualquer tipo são bem-vindas!

---

## 📄 Licença

[MIT](LICENSE) © [gutomec](https://github.com/gutomec)

### Licenças de Terceiros

Este CLI instala e integra projetos open-source que possuem suas próprias licenças. Todas são MIT:

| Projeto | Licença | Copyright |
|---------|---------|-----------|
| [Synkra AIOS/AIOX](https://github.com/SynkraAI/aios-core) | MIT + Trademark Notice | BMad Code, LLC & SynkraAI Inc. |
| [Get Shit Done](https://github.com/glittercowboy/get-shit-done) | MIT | Lex Christopherson |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claude-sisyphus) | MIT | Yeachan Heo |

> [!NOTE]
> O Synkra AIOS/AIOX é derivado do [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD) por Brian Madison. Os nomes "BMad", "BMad Method" e "BMad Core" são marcas registradas da BMad Code, LLC e **não** são licenciados sob MIT. Veja [TRADEMARK.md](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/TRADEMARK.md) para detalhes.

Consulte [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) para os textos completos de cada licença.
