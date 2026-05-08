import { z } from 'zod';
import { UserSchema } from '../domain/user.js';
export const SignupRequestSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});
export const LoginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export const AuthUserSchema = UserSchema.pick({
    id: true,
    username: true,
    email: true,
});
export const AuthResponseSchema = z.object({
    user: AuthUserSchema,
    token: z.string(),
});
export const MeResponseSchema = AuthUserSchema.extend({
    createdAt: z.coerce.date(),
});
//# sourceMappingURL=auth.js.map