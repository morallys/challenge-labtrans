import express from 'express';

import useRoutes from './routes';

const PORT = 3535;
const app = express();
app.use(express.json());

useRoutes(app);

app.listen(PORT, () =>
  console.log(`Servidor rodando com sucesso na porta ${PORT}`)
);
