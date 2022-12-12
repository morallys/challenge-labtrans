import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import animaisService from '../services/animais.service';
import errorMessage from '../utils/errorMessages';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const animais = await animaisService.getAll();

    if (animais.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: errorMessage.animalsNotFound });
    }

    return res.status(StatusCodes.OK).json(animais);
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
};
