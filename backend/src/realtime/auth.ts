import type { Socket } from 'socket.io';
import { verifyToken } from '../utils/auth.js';

export interface AuthedSocketData {
  userId: string;
}

export const socketAuth = (
  socket: Socket,
  next: (err?: Error) => void,
): void => {
  const token =
    (socket.handshake.auth?.token as string | undefined) ??
    extractBearer(socket.handshake.headers.authorization);

  if (!token) {
    return next(new Error('Unauthorized: missing token'));
  }

  const decoded = verifyToken(token);
  if (!decoded || typeof decoded.userId !== 'string') {
    return next(new Error('Unauthorized: invalid token'));
  }

  (socket.data as AuthedSocketData).userId = decoded.userId;
  next();
};

const extractBearer = (header: string | undefined): string | undefined => {
  if (!header) return undefined;
  const [scheme, value] = header.split(' ');
  return scheme === 'Bearer' && value ? value : undefined;
};
