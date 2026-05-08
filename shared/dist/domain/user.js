import { z } from 'zod';
export const UserSchema = z.object({
    id: z.string().uuid(),
    username: z.string().min(3),
    email: z.string().email(),
    createdAt: z.coerce.date(),
});
export const PublicUserSchema = UserSchema.pick({
    id: true,
    username: true,
});
//# sourceMappingURL=user.js.map