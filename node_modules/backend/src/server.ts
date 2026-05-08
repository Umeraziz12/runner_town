import { createServer, type Server as HttpServer } from 'node:http';
import type { Express } from 'express';
import { createIO } from './realtime/io.js';

export const createHttpServer = (app: Express): HttpServer => {
  const httpServer = createServer(app);
  createIO(httpServer);
  return httpServer;
};
