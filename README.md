<h1 align="center">
  ⚡ create-aiox-god-mode
</h1>

<p align="center">
  <strong>Monte um sistema completo de desenvolvimento orquestrado por IA em segundos.</strong><br>
  <sub>6 AI Tools. 10 agentes de IA. find-skills. oh-my-claudecode. 3 servidores MCP. Um único comando.</sub>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-aiox-god-mode"><img src="https://img.shields.io/npm/v/create-aiox-god-mode?style=flat-square&color=cb3837&label=npm" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/create-aiox-god-mode"><img src="https://img.shields.io/npm/dm/create-aiox-god-mode?style=flat-square&color=blue" alt="npm downloads"></a>
  <a href="https://github.com/gutomec/create-aiox-god-mode/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/create-aiox-god-mode?style=flat-square&color=green" alt="license"></a>
  <img src="https://img.shields.io/node/v/create-aiox-god-mode?style=flat-square&color=339933" alt="node version">
</p>

<p align="center">
  <a href="#-início-rápido">Início Rápido</a> ·
  <a href="#-o-que-você-recebe">O Que Você Recebe</a> ·
  <a href="#-funcionalidades">Funcionalidades</a> ·
  <a href="#-comandos">Comandos</a> ·
  <a href="#-agentes-de-ia">Agentes</a>
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
| [**Synkra AIOS**](https://github.com/SynkraAI/aios-core) | [**Pedro Valério**](https://github.com/Pedrovaleriolopez) / [SynkraAI](https://github.com/SynkraAI) | Framework core — toda a arquitetura de agentes, constitution, workflows, tasks, templates e o sistema de squads que este CLI instala e configura |
| [squads.sh](https://squads.sh) | [gutomec](https://github.com/gutomec) | Plataforma de gerenciamento de squads para projetos AIOS |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | [Anthropic](https://www.anthropic.com) | Motor de IA que torna tudo possível — agentes, skills e MCP rodam sobre o Claude Code |
| [Vercel Labs Skills](https://github.com/vercel-labs/skills) | [Vercel](https://github.com/vercel-labs) | Skill `find-skills` — busca de skills sob demanda |
| [nano-banana-pro](https://www.npmjs.com/package/@rafarafarafa/nano-banana-pro-mcp) | [rafarafarafa](https://github.com/rafarafarafa) | Servidor MCP para geração de imagens com Gemini |
| [Context7](https://github.com/upstash/context7-mcp) | [Upstash](https://github.com/upstash) | Servidor MCP para documentação de bibliotecas ao vivo |
| [21st.dev Magic](https://github.com/21st-dev/magic) | [21st.dev](https://github.com/21st-dev) | Servidor MCP para busca e geração de componentes UI |
| [Get Shit Done](https://www.npmjs.com/package/get-shit-done-cc) | [get-shit-done](https://github.com/get-shit-done) | Framework GSD para gestão de projetos com Claude Code |
| [oh-my-claudecode](https://www.npmjs.com/package/oh-my-claude-sisyphus) | [Sisyphus](https://github.com/Sisyphus) | Orquestração multi-agente para Claude Code |

> [!NOTE]
> `create-aiox-god-mode` é um **instalador e orquestrador** — ele baixa, configura e integra os projetos listados acima. Todo o crédito pelo framework Synkra AIOS pertence a [Pedro Valério](https://github.com/Pedrovaleriolopez) e à organização [SynkraAI](https://github.com/SynkraAI). O crédito pelas skills, MCPs e ferramentas pertence aos respectivos autores. Se você é autor de algum projeto listado e deseja ajustes na atribuição, [abra uma issue](https://github.com/gutomec/create-aiox-god-mode/issues).

---

```bash
npx create-aiox-god-mode meu-projeto
```

> [!NOTE]
> Este pacote é equivalente ao [`create-aios-god-mode`](https://github.com/gutomec/create-aios-god-mode) com branding **Synkra AIOX**. Ambos instalam o mesmo sistema.

---

## 🎯 O Que Você Recebe

<table>
<tr>
<td align="center" width="33%">
<h3>🤖 10 Agentes de IA</h3>
<sub>Dev, QA, Architect, PM, PO, SM, Analyst, Data Engineer, UX Designer, DevOps — cada um com persona única e comandos exclusivos</sub>
</td>
<td align="center" width="33%">
<h3>🧩 find-skills</h3>
<sub>Busca e instalação de skills sob demanda via <code>find-skills</code> — instale apenas o que você precisa, quando precisa</sub>
</td>
<td align="center" width="33%">
<h3>🔌 3 Servidores MCP</h3>
<sub>nano-banana-pro (imagens IA), Context7 (docs ao vivo), 21st.dev (componentes UI) — pré-configurados e prontos</sub>
</td>
</tr>
<tr>
<td align="center" width="33%">
<h3>🌐 6 AI Tools</h3>
<sub>Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot, AntiGravity — selecione uma ou todas na instalação</sub>
</td>
<td align="center" width="33%">
<h3>📖 Dev Orientado a Stories</h3>
<sub>Ciclo completo: criar → validar → implementar → QA gate. Toda feature começa com uma story</sub>
</td>
<td align="center" width="33%">
<h3>🛡️ Proteção do Framework</h3>
<sub>Modelo de 4 camadas (L1–L4) com deny rules. Arquivos core do framework são imutáveis por design</sub>
</td>
</tr>
</table>

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
> O [Claude Code](https://docs.anthropic.com/en/docs/claude-code) precisa estar instalado para usar o sistema de agentes AIOX. Instale com `npm install -g @anthropic-ai/claude-code`.

---

## ✨ Funcionalidades

- **⚡ God Mode** — Orquestração completa com 10 personas de IA especializadas, cada uma com comandos dedicados. Compatível com 6 AI Tools: Claude Code, Codex, Gemini, Cursor, GitHub Copilot e Antigravity
- **🤖 Sistema de Agentes** — Ative agentes com `@nome-do-agente`, execute comandos com `*comando`. Protocolo de handoff integrado preserva contexto entre trocas
- **📖 Desenvolvimento Orientado a Stories** — Todo trabalho flui por stories: `@sm *draft` → `@po *validate` → `@dev *develop` → `@qa *gate`
- **👥 Sistema de Squads** — Adicione squads multi-agente sob demanda via `add-squad` para workflows de domínios específicos
- **🧩 find-skills** — Busca e instalação de skills sob demanda via `find-skills` do ecossistema Vercel Labs
- **🔧 oh-my-claudecode** — Orquestração multi-agente via [oh-my-claude-sisyphus](https://www.npmjs.com/package/oh-my-claude-sisyphus)
- **🔌 Integração MCP** — 3 servidores MCP pré-configurados em `.mcp.json` para geração de imagens com IA, documentação ao vivo e componentes UI
- **🛡️ Proteção do Framework** — Modelo de 4 camadas com deny rules determinísticas em `settings.json`. Arquivos L1/L2 são imutáveis
- **🔄 QA Loop** — Ciclo automatizado de revisão-correção: `@qa review → veredito → @dev corrige → re-review` (máx. 5 iterações)
- **📋 Spec Pipeline** — Transforma requisitos informais em specs executáveis com seleção de fases baseada em complexidade (3-6 fases)
- **🔍 Brownfield Discovery** — Avaliação de débito técnico em 10 fases para codebases existentes com coleta de dados multi-agente

---

## 📦 Fluxo de Instalação

O instalador executa um **pipeline automatizado de 8 etapas**:

| Etapa | Descrição |
|:-----:|-----------|
| 1 | 🔍 **Validar ambiente** — Verifica versão do Node.js, nome do projeto, diretório e rede |
| 2 | 🏗️ **Inicializar framework AIOX** — Estrutura `.aiox-core/` com constitution, tasks e workflows. O usuário seleciona idioma, IDEs e tech preset |
| 3 | ⚡ **Instalar God Mode** — Instala skills, rules e config do God Mode para **cada IDE selecionada** (template bundled no CLI) |
| 4 | 🔌 **Configurar servidores MCP** — Configura `nano-banana-pro`, `context7`, `21st-dev` para cada IDE selecionada |
| 5 | 🚀 **Instalar framework GSD** — [Get Shit Done](https://www.npmjs.com/package/get-shit-done-cc) para gestão de projetos |
| 6 | 🔧 **Instalar oh-my-claudecode** — [oh-my-claudecode](https://www.npmjs.com/package/oh-my-claude-sisyphus) para orquestração multi-agente |
| 7 | 🧹 **Limpeza e conversão** — Converte estrutura para **cada IDE selecionada** (Claude Code, Codex, Gemini, Cursor, Copilot, AntiGravity) |
| 8 | ✅ **Finalizar** — Instala dependências, inicializa git e faz commit inicial |

---

## 🛠️ Comandos

### `init` (padrão)

Cria um novo projeto AIOX do zero.

```bash
npx create-aiox-god-mode meu-projeto
```

### `update`

Atualiza um projeto existente para a versão mais recente do template.

```bash
cd meu-projeto
npx create-aiox-god-mode update
```

### `doctor`

Executa verificações de saúde em uma instalação AIOX existente.

```bash
cd meu-projeto
npx create-aiox-god-mode doctor
```

### `add-squad`

Adiciona uma nova configuração de squad ao projeto.

```bash
cd meu-projeto
npx create-aiox-god-mode add-squad backend
```

---

<details>
<summary><h2>🤖 Agentes de IA</h2></summary>

Todos os agentes são ativados com `@nome-do-agente` e suportam comandos via prefixo `*`.

| Agente | Persona | Função | Comandos Principais |
|--------|---------|--------|---------------------|
| `@dev` | **Dex** | Desenvolvedor Full Stack | `*develop`, `*build-autonomous`, `*run-tests`, `*self-critique` |
| `@qa` | **Quinn** | Arquiteto de Testes | `*review`, `*gate`, `*security-check`, `*test-design` |
| `@architect` | **Aria** | Arquiteto Técnico | `*design-system`, `*tech-selection`, `*api-design` |
| `@pm` | **Morgan** | Product Manager | `*create-prd`, `*create-epic`, `*execute-epic`, `*write-spec` |
| `@po` | **Pax** | Product Owner | `*validate-story-draft`, `*close-story`, `*backlog-review` |
| `@sm` | **River** | Scrum Master | `*draft`, `*story-checklist` |
| `@analyst` | **Atlas** | Analista de Negócios | `*research`, `*feasibility-study`, `*user-research` |
| `@data-engineer` | **Dara** | Especialista em Banco de Dados | Design DDL, políticas RLS, migrações, otimização de queries |
| `@ux-design-expert` | **Uma** | Designer UX/UI | Specs frontend, jornadas de usuário, design systems |
| `@devops` | **Gage** | Gerente de Repositório | `*push`, `*create-pr`, `*release`, `*add-mcp` |
| `@aios-master` | **Orion** | Orquestrador do Framework | `*create`, `*modify`, `*run-workflow`, `*correct-course` |

**Comandos universais** (disponíveis em todos os agentes): `*help`, `*guide`, `*session-info`, `*yolo`, `*exit`

</details>

---

## 🔌 Servidores MCP

Pré-configurados em `.mcp.json` e prontos para uso:

| Servidor | Pacote | Propósito |
|----------|--------|-----------|
| **nano-banana-pro** | `@rafarafarafa/nano-banana-pro-mcp` | Geração de imagens com IA via Gemini |
| **context7** | `@upstash/context7-mcp` | Consulta de documentação de bibliotecas ao vivo |
| **21st-dev** | `@21st-dev/magic` | Busca e geração de componentes UI |

> [!NOTE]
> O `nano-banana-pro` requer a variável de ambiente `GEMINI_API_KEY`. Adicione-a ao seu arquivo `.env`.

---

## 📁 Estrutura do Projeto

```
meu-projeto/
├── .claude/
│   ├── settings.json              # Permissões do Claude Code + deny rules
│   ├── rules/                     # Regras de workflow, exemplos de tools, autoridade de agentes
│   ├── skills/                    # God Mode + find-skills
│   └── CLAUDE.md                  # Instruções do projeto para o Claude
├── openai.yaml                    # Configuração para Codex (gerado automaticamente)
├── AGENTS.md                      # Skills list para Codex (gerado automaticamente)
├── .aiox-core/
│   ├── constitution.md            # Princípios do framework (imutável)
│   ├── core/                      # Módulos core do framework
│   ├── development/
│   │   ├── tasks/                 # Definições de tasks executáveis
│   │   ├── templates/             # Templates de documentos e código
│   │   ├── checklists/            # Checklists de validação
│   │   └── workflows/             # Workflows multi-etapa
│   └── data/                      # Registro de tools, dados de configuração
├── .mcp.json                      # Configuração dos servidores MCP
├── docs/
│   ├── stories/                   # Stories de desenvolvimento
│   ├── prd/                       # Documentos de requisitos do produto
│   └── architecture/              # Documentação de arquitetura do sistema
├── squads/                        # Configurações de squads
├── packages/                      # Pacotes do projeto
├── tests/                         # Suítes de teste
├── package.json
└── README.md
```

---

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
