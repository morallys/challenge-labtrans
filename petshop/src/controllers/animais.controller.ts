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

const getById = async (req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const { id } = req.params;

    const animal = await animaisService.getById(id);

    if (animal === null) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: errorMessage.animalNotFound });
    }

    return res.status(StatusCodes.OK).json(animal);
  } catch (err) {
    next();
  }
};

const addAnimal = async (req: Request, res: Response, next: NextFunction) => {
  //
  try {
    const animalData = req.body;

    const animal = await animaisService.addAnimal(animalData);

    return res.status(StatusCodes.CREATED).json(animal);
  } catch (err) {
    next(err);
  }
};

const updateAnimal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //
  try {
    const animalData = req.body;
    const animalId = parseInt(req.params.id);

    await animaisService.updateAnimal(animalId, animalData);

    return res.status(StatusCodes.OK).end();
  } catch (err) {
    next(err);
  }
};

const deleteAnimal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //
  try {
    const animalId = parseInt(req.params.id);

    await animaisService.deleteAnimal(animalId);

    return res.status(StatusCodes.OK).end();
  } catch (err) {
    next(err);
  }
};

export default {
  getAll,
  getById,
  addAnimal,
  updateAnimal,
  deleteAnimal,
};
