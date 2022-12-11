import { Prisma, PrismaClient } from '@prisma/client';

import Err from '../middlewares/errorMiddlewares';

const prisma = new PrismaClient();

const getAll = async () => {
  return prisma.cliente.findMany();
};

export default {
  getAll,
};
