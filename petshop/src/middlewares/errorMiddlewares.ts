import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

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

  if (code) return res.status(code).json({ message: err.message });

  console.log(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};

export default errorMiddleware;
