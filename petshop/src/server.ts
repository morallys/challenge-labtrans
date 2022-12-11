import express from 'express';

const PORT = 3535;
const app = express();

app.listen(PORT, () => console.log(`Server rodando com sucesso na porta ${PORT}`))
