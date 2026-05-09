import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { createApp } from './app.js';
import { createHttpServer } from './server.js';

const app = createApp();
const httpServer = createHttpServer(app);

httpServer.listen(env.PORT, () => {
  logger.info({ port: env.PORT, env: env.NODE_ENV }, 'server started');
});
