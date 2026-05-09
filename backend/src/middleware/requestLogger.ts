import { pinoHttp } from 'pino-http';
import { logger } from '../utils/logger.js';
import { env } from '../config/env.js';

export const requestLogger = pinoHttp({
  logger,
  autoLogging: env.NODE_ENV !== 'test'
    ? { ignore: (req) => req.url === '/health' }
    : false,
  customLogLevel: (_req, res, err) => {
    if (err || res.statusCode >= 500) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },
  serializers: {
    req: (req) => ({ method: req.method, url: req.url, id: req.id }),
    res: (res) => ({ statusCode: res.statusCode }),
  },
});
