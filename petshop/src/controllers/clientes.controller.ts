import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import clientesService from '../services/clientes.service';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const clientes = await clientesService.getAll();

    return res.status(StatusCodes.OK).json(clientes);
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
};
