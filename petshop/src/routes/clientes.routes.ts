import { Router } from 'express';

import clientesController from '../controllers/clientes.controller';
import clientesMiddleware from '../middlewares/clientes.middleware';

const router = Router();

router
  .get('/getAll', clientesController.getAll)
  .get('/getById/:id', clientesController.getById)
  .put(
    '/update/:id',
    clientesMiddleware.checkBody,
    clientesController.updateClient
  )
  .post('/created', clientesMiddleware.checkBody, clientesController.addClient)
  .delete('/delete/:id', clientesController.deleteClient);

export default router;
