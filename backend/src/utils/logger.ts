import { pino, type LoggerOptions } from 'pino';
import { env } from '../config/env.js';

const isDev = env.NODE_ENV === 'development';

const options: LoggerOptions = {
  level: isDev ? 'debug' : 'info',
  redact: {
    paths: ['req.headers.authorization', 'req.headers.cookie', '*.password', '*.token'],
    censor: '[redacted]',
  },
};

if (isDev) {
  options.transport = {
    target: 'pino-pretty',
    options: { colorize: true, translateTime: 'SYS:HH:MM:ss', ignore: 'pid,hostname' },
  };
}

export const logger = pino(options);
