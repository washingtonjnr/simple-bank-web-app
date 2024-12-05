![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<h1 align="center" style="font-weight: bold;">[Mag Bank]</h1>

<p align="center">
  <img src="/logo.svg" alt="Mag Bank logo" width="300px">
</p>

---

## 📌 Sobre

**Mag Bank** é um sistema bancário fictício, modular e escalável, com autenticação JWT, gerenciamento de transações e uma interface responsiva construída com **React** e **TailwindCSS**. A aplicação simula operações financeiras como cadastro de usuários, login, e transações, utilizando o **JSON Server** para API local.

---

## 🚀 Começando

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Configuração do aambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/mag-bank.git
   cd mag-bank
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento completo (Frontend + API):
   ```bash
   npm run dev:full
   ```

4. Acesse a aplicação no navegador:
- Frontend: http://localhost:5173
- Fake API (JSON Server): http://localhost:3001

---

## 📂 Estrutura do projeto

#### A aplicação segue uma arquitetura modular, organizada em:
- Components: Componentes reutilizáveis.
- Pages: Telas principais da aplicação.
- Services: Conexão com a API (axios).
- Hooks: Lógica compartilhada (como formulários e estados).
- Utils: Funções auxiliares.
- Types: Tipos e interfaces para garantir tipagem estática.


---

## 🛡️ Autenticação e segurança

###### A autenticação é gerenciada com JSON Server Auth, oferecendo suporte a rotas protegidas com JWT. Para acessar áreas restritas, é necessário realizar login e obter um token de autenticação.
