import { Express } from 'express';

import errorMiddleware from '../middlewares/errorMiddlewares';

const routes = (app: Express) => {
  app.use(errorMiddleware);
};

export default routes;
