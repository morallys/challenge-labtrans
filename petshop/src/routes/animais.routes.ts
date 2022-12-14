import { Router } from 'express';

import animaisController from '../controllers/animais.controller';

const router = Router();

router
  .get('/', animaisController.getAll)
  .get('/:id', animaisController.getById)
  .put('/:id', animaisController.updateAnimal)
  .delete('/:id', animaisController.deleteAnimal)
  .post('/', animaisController.addAnimal);

export default router;
