import express, { type Express } from 'express';
import cors, { type CorsOptions } from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { globalLimiter } from './middleware/rateLimit.js';
import { requestLogger } from './middleware/requestLogger.js';
import authRoutes from './modules/auth/auth.routes.js';
import territoryRoutes from './modules/territory/territory.routes.js';

const parseTrustProxy = (raw: string): number | boolean | string => {
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  const asNumber = Number(raw);
  if (!Number.isNaN(asNumber)) return asNumber;
  return raw;
};

const buildCorsOptions = (): CorsOptions => {
  if (!env.CORS_ORIGIN) return {};
  const allowed = env.CORS_ORIGIN.split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  return {
    origin: (origin, cb) => {
      if (!origin || allowed.includes(origin)) return cb(null, true);
      cb(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  };
};

export const createApp = (): Express => {
  const app = express();

  if (env.TRUST_PROXY) {
    app.set('trust proxy', parseTrustProxy(env.TRUST_PROXY));
  }

  app.use(requestLogger);
  app.use(helmet());
  app.use(cors(buildCorsOptions()));
  app.use(express.json());
  app.use(globalLimiter);

  app.use('/api/auth', authRoutes);
  app.use('/api/territories', territoryRoutes);

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
};
