import { Router } from 'express';

import animaisController from '../controllers/animais.controller';

const router = Router();

router
  .get('/getAll', animaisController.getAll)
  .get('/getById/:id', animaisController.getById)
  .put('/update/:id', animaisController.updateAnimal)
  .post('/created', animaisController.addAnimal)
  .delete('/delete/:id', animaisController.deleteAnimal);

export default router;
