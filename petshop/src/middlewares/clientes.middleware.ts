import { PrismaClient, Prisma } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

import validate from '../services/validate';

const checkBody = (req: Request, _res: Response, next: NextFunction) => {
  //
  const { nome, email, telefone, rua, numero, bairro, cidade } = req.body;

  try {
    validate.name(nome);
    validate.emailClient(email);
    validate.telefone(telefone);
    validate.endereco(rua, bairro, cidade);
    validate.numero(numero);

    next();
  } catch (err) {
    next(err);
  }
};

export default {
  checkBody,
};
