import { Express } from 'express';

import ClientesRoutes from './clientes.routes';
import errorMiddleware from '../middlewares/errorMiddlewares';

const routes = (app: Express) => {
  app.use('/clientes', ClientesRoutes);

  app.use(errorMiddleware);
};

export default routes;
