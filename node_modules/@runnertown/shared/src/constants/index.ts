export const API_PREFIX = '/api';

export const SocketNamespace = {
  Run: '/run',
  Territory: '/territory',
  Presence: '/presence',
} as const;
export type SocketNamespace = (typeof SocketNamespace)[keyof typeof SocketNamespace];
