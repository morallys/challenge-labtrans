import { Router } from 'express';

import clientesController from '../controllers/clientes.controller';

const router = Router();

router
  .get('/', clientesController.getAll)
  .get('/:id', clientesController.getById);

export default router;
