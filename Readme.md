# Loja de Donuts

Este é um projeto de uma loja online de donuts, onde os usuários podem se registrar, fazer login, visualizar produtos, adicionar itens ao carrinho e realizar pedidos.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript, Express
- **Backend**: Node.js, Express, Sequelize, PostgreSQL
- **Testes**: Jest

## Estrutura do Projeto

```
.
├── backend
│ ├── repository
│ ├── usecases
│ ├── routes
│ ├── test
│ ├── .babelrc
│ ├── Dockerfile
│ ├── jest.config.js
│ ├── package.json
│ └── index.js
└── frontend
├── public
│ ├── styles
│ ├── scripts
│ ├── images
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ └── cart.html
├── server.js
└── package.json
```

## Instalação

### Backend

1. Navegue até o diretório `backend`:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados PostgreSQL. Certifique-se de que o banco de dados está em execução e que as credenciais estão corretas no arquivo `conn.js`.

4. Para iniciar o servidor backend, execute:
   ```bash
   npm start
   ```

### Frontend

1. Navegue até o diretório `frontend`:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Para iniciar o servidor frontend, execute:
   ```bash
   node server.js
   ```

## Uso

- Acesse o frontend no navegador em `http://localhost:3001`.
- Os usuários podem se registrar, fazer login e navegar pelos produtos disponíveis.
- Os usuários podem adicionar produtos ao carrinho e finalizar a compra.

## Testes

Os testes estão localizados na pasta `test` dentro do diretório `backend`. Para executar os testes, navegue até o diretório `backend` e execute:

```bash
npm test
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.