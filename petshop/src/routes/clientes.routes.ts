import { Router } from 'express';

import clientesController from '../controllers/clientes.controller';
import clientesMiddleware from '../middlewares/clientes.middleware';

const router = Router();

router
  .get('/', clientesController.getAll)
  .get('/:id', clientesController.getById)
  .post('/', clientesMiddleware.checkBody, clientesController.addClient);

export default router;
