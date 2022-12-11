import { Prisma, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import Err from '../utils/Err';
import errorMessage from '../utils/errorMessages';

const prisma = new PrismaClient();

const getAll = async () => {
  return prisma.cliente.findMany();
};

const getById = async (id: String) => {
  //
  const convertId = Number(id);

  if (Number.isNaN(convertId)) {
    throw new Err(StatusCodes.BAD_REQUEST, errorMessage.number);
  }

  return prisma.cliente.findUnique({
    where: {
      id: convertId,
    },
  });
};

export default {
  getAll,
  getById,
};
