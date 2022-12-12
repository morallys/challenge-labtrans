import { Prisma, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { Cliente } from '@prisma/client';
import errorMessage from '../utils/errorMessages';
import Err from '../utils/Err';

const prisma = new PrismaClient();

const getAll = async () => {
  return prisma.cliente.findMany();
};

const getById = async (id: string) => {
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

const updateClient = async (id: number, clientData: Cliente) => {
  //
  const { nome, email, telefone, rua, numero, bairro, cidade } = clientData;

  const findClient = await prisma.cliente.findUnique({ where: { id } });

  if (!findClient)
    throw new Err(StatusCodes.NOT_FOUND, errorMessage.clientNotFound);

  return prisma.cliente.updateMany({
    where: { id },
    data: clientData,
  });
};

const deleteClient = async (id: number) => {
  //
  const findClient = await prisma.cliente.findUnique({ where: { id } });

  if (!findClient)
    throw new Err(StatusCodes.NOT_FOUND, errorMessage.clientNotFound);

  return prisma.cliente.delete({ where: { id } });
};

export default {
  getAll,
  getById,
  addClient,
  updateClient,
  deleteClient,
};
