import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'Termos de Serviço',
  });
});

export default router;
