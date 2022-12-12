import { Router } from 'express';
import routes from '.';

import animaisController from '../controllers/animais.controller';

const router = Router();

router.get('/', animaisController.getAll);

export default router;
