import express, { type Express } from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes.js';
import territoryRoutes from './modules/territory/territory.routes.js';

export const createApp = (): Express => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/territories', territoryRoutes);

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
};
