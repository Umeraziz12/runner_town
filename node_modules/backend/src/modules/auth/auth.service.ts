import prisma from '../../utils/prisma.js';
import { hashPassword, comparePassword, generateToken } from '../../utils/auth.js';
import type { SignupRequest, LoginRequest, AuthResponse, MeResponse } from './auth.schema.js';

export class AuthError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export const signupUser = async (input: SignupRequest): Promise<AuthResponse> => {
  const { username, email, password } = input;

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] },
  });
  if (existingUser) {
    throw new AuthError(400, 'User already exists');
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { username, email, passwordHash },
  });

  const token = generateToken(user.id);
  return { user: { id: user.id, username, email }, token };
};

export const loginUser = async (input: LoginRequest): Promise<AuthResponse> => {
  const { email, password } = input;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await comparePassword(password, user.passwordHash))) {
    throw new AuthError(401, 'Invalid credentials');
  }

  const token = generateToken(user.id);
  return { user: { id: user.id, username: user.username, email }, token };
};

export const getMe = async (userId: string): Promise<MeResponse> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true, email: true, createdAt: true },
  });
  if (!user) {
    throw new AuthError(404, 'User not found');
  }
  return user;
};
