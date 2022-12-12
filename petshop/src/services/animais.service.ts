import { Prisma, PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { Animal } from '@prisma/client';

import errorMessage from '../utils/errorMessages';
import Err from '../utils/Err';

const prisma = new PrismaClient();

const getAll = async () => {
  return prisma.animal.findMany();
};

export default {
  getAll,
};
