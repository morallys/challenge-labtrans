import { Prisma, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { Animal } from '@prisma/client';

import errorMessage from '../utils/errorMessages';
import Err from '../utils/Err';

const prisma = new PrismaClient();

const getAll = async () => {
  return prisma.animal.findMany();
};

const getById = async (id: string) => {
  //
  const convertId = Number(id);

  if (Number.isNaN(convertId)) {
    throw new Err(StatusCodes.BAD_REQUEST, `Id ${errorMessage.number}`);
  }

  return prisma.animal.findUnique({
    where: {
      id: convertId,
    },
  });
};

const addAnimal = async (animalData: Animal) => {
  //
  const { cliente_id } = animalData;

  const cliente = await prisma.cliente.findUnique({
    where: { id: cliente_id },
  });

  if (!cliente)
    throw new Err(
      StatusCodes.NOT_FOUND,
      `${errorMessage.clientNotFound} com esse id.`
    );

  const animal = await prisma.animal.create({
    data: animalData,
  });

  return animal;
};

export default {
  getAll,
  getById,
  addAnimal,
};
