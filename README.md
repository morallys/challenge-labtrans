# challenge-labtrans

- OBS: Para inicialização do sistema do Prisma, inicialmente alterar o arquivo `example.env`. Remover a extensão 'example' e deixar apenas o .env com as informação de login do MySQL, como login e senha, porta padrão do MySQL no computador e nome do banco desejado.

  DATABASE_URL="mysql://login:senha@localhost:3306/nome-do-banco-desejado"

#### Para inicialização do projeto, seguir passos abaixo: 

- Instalação de dependências do projeto: `npm install`

- Criação do banco de dados: `npx prisma migrate dev`

- Inicialização do servidor: `npm run dev`
