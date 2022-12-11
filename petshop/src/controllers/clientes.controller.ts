import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import clientesService from '../services/clientes.service';
import errorMessage from '../utils/errorMessages';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const clientes = await clientesService.getAll();

    if (clientes.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: errorMessage.clientNotFound });
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
        .json({ message: errorMessage.clientNotFound });
    }

    return res.status(StatusCodes.OK).json(cliente);
  } catch (err) {
    next(err);
  }
};

const addClient = async (req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const clientData = req.body;

    const cliente = await clientesService.addClient(clientData);

    return res.status(StatusCodes.CREATED).json(cliente);
  } catch (err) {
    next(err);
  }
};

const updateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //
  try {
    const clientData = req.body;
    const clientId = parseInt(req.params.id);

    await clientesService.updateClient(clientId, clientData);

    return res.status(StatusCodes.OK).end();
  } catch (err) {
    next(err);
  }
};

const deleteClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //
  try {
    const clientId = req.params.id;

    await clientesService.deleteClient(parseInt(clientId));

    return res.status(StatusCodes.OK).end();
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  getById,
  addClient,
  updateClient,
  deleteClient,
};
