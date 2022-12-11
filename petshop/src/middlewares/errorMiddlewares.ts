import { Prisma, PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMessage from '../utils/errorMessages';

const prisma = new PrismaClient();

interface IError extends Error {
  code?: number;
}

const errorMiddleware = (
  err: IError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { code, message } = err;

  if (typeof code === 'number')
    return res.status(code).json({ message: err.message });
  console.log(err.code);

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    console.log(`
    Error code: ${err.code},
    `);
    return res
      .status(StatusCodes.CONFLICT)
      .json({ message: errorMessage.conflict });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};

export default errorMiddleware;
