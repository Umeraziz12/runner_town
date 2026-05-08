import { z } from 'zod';
import { UserSchema } from '../domain/user.js';

export const SignupRequestSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});
export type SignupRequest = z.infer<typeof SignupRequestSchema>;

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const AuthUserSchema = UserSchema.pick({
  id: true,
  username: true,
  email: true,
});
export type AuthUser = z.infer<typeof AuthUserSchema>;

export const AuthResponseSchema = z.object({
  user: AuthUserSchema,
  token: z.string(),
});
export type AuthResponse = z.infer<typeof AuthResponseSchema>;

export const MeResponseSchema = AuthUserSchema.extend({
  createdAt: z.coerce.date(),
});
export type MeResponse = z.infer<typeof MeResponseSchema>;
