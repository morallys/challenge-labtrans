import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import clientesService from '../services/clientes.service';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const clientes = await clientesService.getAll();

    if (clientes.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Nenhum cliente encontrado!!' });
    }

    return res.status(StatusCodes.OK).json(clientes);
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const { id } = req.params;

    const cliente = await clientesService.getById(id);

    if (cliente === null) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Cliente não encontrado' });
    }

    return res.status(StatusCodes.OK).json(cliente);
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  getById,
};
