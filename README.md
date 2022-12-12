# challenge-labtrans

-- API para cadastramento de animais e seus donos.

- OBS: Para inicialização do sistema do Prisma, inicialmente alterar o arquivo `example.env`. Remover a extensão 'example' e deixar apenas o .env com as informação de login do MySQL, como login e senha, porta padrão do MySQL no computador e nome do banco desejado.

  DATABASE_URL="mysql://login:senha@localhost:3306/nome-do-banco-desejado"

#### Para inicialização do projeto, seguir passos abaixo:

- Instalação de dependências do projeto: `npm install`

- Criação do banco de dados: `npx prisma migrate dev`

- Inicialização do servidor: `npm run dev`

  ***

-- A API conta com rotas para cadastramentos de clientes, que são as seguintes:

- Clientes

  - GET - http://localhost:3535/clientes/getAll - que realiza a busca de todos os clientes cadastrados
  - GET - http://localhost:3535/clientes/getById/:id - que realiza a busca de clientes por ID
  - POST - http://localhost:3535/clientes/created - cria um cliente na base (Estrutura de inserção de dados abaixo)
  - PUT - http://localhost:3535/clientes/update/:id - atualiza registro de cliente na base (Estrutura de atualização de dados abaixo)
  - DELETE - http://localhost:3535/clientes/delete/:id - deleta cliente cadastrado.

    - Para inserção de cliente - POST:
      {
      "nome": "Fulano de Tal",
      "email": "fulano@gmail.com",
      "telefone": "13586596583",
      "rua": "Rua das Projetada",
      "numero": 50,
      "bairro": "Dourado",
      "cidade": "Inventada"
      }

    - Para atualização de cliente - PUT:
      {
      "nome": "Fulano da Silva",
      "email": "fulano@gmail.com",
      "telefone": "13586596583",
      "rua": "Rua das Projetada 13",
      "numero": 50,
      "bairro": "Balão Dourado",
      "cidade": "Inventada"
      }

- Animais

  - GET - http://localhost:3535/animais/getAll - que realiza a busca de todos os animais cadastrados
  - GET - http://localhost:3535/animais/getById/:id - que realiza a busca de animais por ID
  - POST - http://localhost:3535/animais/created - cria um animal na base (Estrutura de inserção de dados abaixo)
  - PUT - http://localhost:3535/animais/update/:id - atualiza registro de animal na base (Estrutura de atualização de dados abaixo)
  - DELETE - http://localhost:3535/animais/delete/:id - deleta animal cadastrado.

  - Para inserção de animal - POST:

    {
    "nome": "Walter White",
    "sexo": "Macho",
    "especie": "Cães",
    "raca": "Vira-lata",
    "cliente_id": 1
    }

  - Para atualização de animal - PUT:

    {
    "nome": "James",
    "sexo": "macho",
    "especie": "Cães",
    "raca": "Pastor Alemão",
    "cliente_id": 3
    }
