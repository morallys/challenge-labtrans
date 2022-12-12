import { Express } from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

import clientesRoutes from './clientes.routes';
import animaisRoutes from './animais.routes';
import errorMiddleware from '../middlewares/errorMiddlewares';
import Terms from './terms.routes';

const routes = (app: Express) => {
  app.use('/clientes', clientesRoutes);
  app.use('/animais', animaisRoutes);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use('/terms', Terms);

  app.use(errorMiddleware);
};

export default routes;
