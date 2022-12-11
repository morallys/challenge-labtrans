import express from 'express';

const PORT = 3535;
const app = express();
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server rodando com sucesso na porta ${PORT}`)
);
