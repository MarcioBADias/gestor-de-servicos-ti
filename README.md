# Gestor de Serviços

## 📌 Descrição
O **Gestor de Serviços** é uma aplicação desenvolvida para facilitar o cadastro e gerenciamento de serviços prestados por diferentes tipos de usuários. A plataforma permite que **Comerciais, Técnicos e Administradores** gerenciem solicitações de implementação e chamados de suporte.

## 🛠 Tecnologias Utilizadas
- **Frontend:** React.js (com Vite)
- **Backend:** Node.js com Express
- **Banco de Dados:** MongoDB (via Mongoose)
- **Gerenciamento de Estado:** Context API ou Redux (a definir)
- **Autenticação:** JSON Web Token (JWT)
- **Estilização:** Styled-Components ou Tailwind CSS
- **Hospedagem:** Netlify (frontend) e Render/Heroku (backend)

## 🚀 Funcionalidades Principais
- 📌 Cadastro e autenticação de usuários
- 🔑 Perfis de acesso:
  - **Comercial**: Pode abrir serviços de implementação nova
  - **Técnico**: Pode abrir chamados de suporte
  - **Administrador**: Pode abrir ambos os tipos de serviço
- 📋 Gerenciamento de serviços (implementações e chamados)
- 🔍 Listagem de serviços cadastrados e filtros por status/tipo
- 📢 Notificações e atualização de status dos serviços

## 📂 Estrutura do Projeto
```plaintext
/
|-- frontend/                # Interface do usuário (React)
|   |-- src/
|   |   |-- components/      # Componentes reutilizáveis
|   |   |-- pages/           # Páginas principais
|   |   |-- services/        # Conexão com a API
|   |-- public/              # Assets estáticos
|   |-- package.json         # Dependências do frontend
|
|-- backend/                 # Servidor e API (Node.js + Express)
|   |-- models/              # Modelos do MongoDB
|   |-- routes/              # Rotas da API
|   |-- controllers/         # Lógica de negócios
|   |-- config/              # Configurações e conexão com BD
|   |-- server.js            # Arquivo principal do backend
|   |-- package.json         # Dependências do backend
```

O frontend rodará em `http://localhost:5173` e o backend em `http://localhost:3000`.

## 🔜 Próximos Passos
- Implementar autenticação e gestão de sessão
- Criar interface para cadastro e gerenciamento de serviços
- Melhorar a usabilidade e a experiência do usuário (UX/UI)

## 🤝 Contribuição
Se quiser contribuir com o projeto, faça um **fork** e envie um **pull request** com suas melhorias!

---

Desenvolvido por **MarcioBADias** 🚀

