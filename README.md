
# 📘 Documentação de Testes Automatizados – Webdojo (Cypress)

Este repositório contém os testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para a aplicação **Webdojo**.

---

## 📁 Estrutura do Projeto

A estrutura de pastas segue o padrão recomendado pelo Cypress:

```
web/
├── cypress/
│   ├── e2e/                # Casos de teste automatizados
│   │   ├── alerts.cy.js
│   │   ├── cep.cy.js
│   │   ├── consultancy.cy.js
│   │   └── ...
│   ├── fixtures/           # Arquivos JSON e documentos utilizados nos testes
│   │   ├── cep.json
│   │   ├── consultancy.json
│   │   └── document.pdf
│   └── support/            # Utilitários, comandos e ações customizadas
│       ├── actions/
│       │   └── consultancy.actions.js
│       ├── commands.js
│       ├── e2e.js
│       └── utils.js
├── cypress.config.js       # Configuração principal do Cypress
├── dist/                   # Build da aplicação Webdojo
├── package.json
├── yarn.lock / pnpm-lock.yaml
└── ...
```

---

## 🚀 Como executar os testes

### 1. Instale as dependências do projeto

Você pode usar **Yarn**, **npm** ou **pnpm**:

```bash
# Yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

---

### 2. Execute a aplicação Webdojo navegando até a pasta web

A aplicação Webdojo está no mesmo repositório. Para iniciá-la localmente:

```bash
# Yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

A aplicação será servida em: [http://localhost:3000]

---

### 3. Execute os testes com Cypress

#### ✅ Rodar todos os testes (modo headless)

```bash
yarn test
# ou
npm run test
# ou
pnpm test
```

#### 🔑 Testar apenas o login (modo headless)

```bash
yarn test:login
# ou
npm run test:login
# ou
pnpm test:login
```

#### 📱 Testar login no viewport mobile (iPhone XR)

```bash
yarn test:login:mobile
# ou
npm run test:login:mobile
# ou
pnpm test:login:mobile
```

#### 🧪 Rodar testes no modo interativo (modo visual/open)

```bash
npx cypress open
# ou
yarn cypress open
# ou
pnpm cypress open
```
#### 🧪 Rodar todos os testes no modo interativo (modo visual/open)

```bash
npx cypress run --headed 
# ou
yarn cypress run --headed
# ou
pnpm cypress run --headed
```
#### 🧪 Rodar todos os testes no modo interativo escolhendo navegador (modo visual/open)

```bash
npx cypress run --headed --browser navegador
# ou
yarn cypress run --headed --browser navegador
# ou
pnpm cypress run --headed --browser navegador
```

## 🔧 Comandos Customizados

- `cypress/support/commands.js`: comandos reutilizáveis para interações com a aplicação
- `cypress/support/actions/`: lógicas específicas por funcionalidade (ex: `consultancy.actions.js`)
- `utils.js`: funções auxiliares gerais para os testes

---

## 📎 Fixtures

Localizadas em `cypress/fixtures/`, contêm dados e arquivos estáticos usados nos testes:

- `cep.json`: dados de CEP
- `consultancy.json`: dados de consultorias
- `document.pdf`: arquivo para testes de upload

---

## 💡 Observações

- Os testes são configurados para rodar com `viewportWidth: 1440` e `viewportHeight: 900` por padrão.
- Use o viewport mobile de `414x896` para simulação de dispositivos móveis (iPhone XR).

---

## 🧑‍💻 Requisitos

- Node.js 16+
- Cypress 12+
- Navegador Chrome, Edge, Firefox ou Electron instalado para testes visuais
