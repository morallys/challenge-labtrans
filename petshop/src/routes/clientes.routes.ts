import { Router } from 'express';

import clientesController from '../controllers/clientes.controller';
import clientesMiddleware from '../middlewares/clientes.middleware';

const router = Router();

router
  .get('/', clientesController.getAll)
  .get('/:id', clientesController.getById)
  .put('/:id', clientesMiddleware.checkBody, clientesController.updateClient)
  .post('/', clientesMiddleware.checkBody, clientesController.addClient)
  .delete('/:id', clientesController.deleteClient);

export default router;
