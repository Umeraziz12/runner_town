import type { Server as HttpServer } from 'node:http';
import { Server as IOServer, type Namespace } from 'socket.io';
import { SocketNamespace } from './events.js';
import { socketAuth } from './auth.js';

let io: IOServer | null = null;

export const createIO = (httpServer: HttpServer): IOServer => {
  if (io) return io;

  io = new IOServer(httpServer, {
    cors: { origin: '*' },
  });

  registerNamespace(io, SocketNamespace.Run);
  registerNamespace(io, SocketNamespace.Territory);
  registerNamespace(io, SocketNamespace.Presence);

  return io;
};

export const getIO = (): IOServer => {
  if (!io) {
    throw new Error('Socket.IO not initialized. Call createIO(httpServer) first.');
  }
  return io;
};

const registerNamespace = (server: IOServer, path: string): Namespace => {
  const ns = server.of(path);
  ns.use(socketAuth);
  ns.on('connection', (socket) => {
    console.log(`[socket] ${path} connected: user=${socket.data.userId}`);
    socket.on('disconnect', (reason) => {
      console.log(`[socket] ${path} disconnected: user=${socket.data.userId} reason=${reason}`);
    });
  });
  return ns;
};
