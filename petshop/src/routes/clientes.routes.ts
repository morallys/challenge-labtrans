import { Router } from 'express';

import clientesController from '../controllers/clientes.controller';

const router = Router();

router.get('/', clientesController.getAll);

export default router;
