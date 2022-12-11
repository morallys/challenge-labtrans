import { Prisma, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { Cliente } from '@prisma/client';
import errorMessage from '../utils/errorMessages';
import Err from '../utils/Err';

const prisma = new PrismaClient();

const getAll = async () => {
  return prisma.cliente.findMany();
};

const getById = async (id: String) => {
  //
  const convertId = Number(id);

  if (Number.isNaN(convertId)) {
    throw new Err(StatusCodes.BAD_REQUEST, `Id ${errorMessage.number}`);
  }

  return prisma.cliente.findUnique({
    where: {
      id: convertId,
    },
  });
};

const addClient = async (clientData: Cliente) => {
  //
  const cliente = await prisma.cliente.create({
    data: clientData,
  });

  return cliente;
};

export default {
  getAll,
  getById,
  addClient,
};
