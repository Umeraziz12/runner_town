import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    createdAt: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export type User = z.infer<typeof UserSchema>;
export declare const PublicUserSchema: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
}, z.core.$strip>;
export type PublicUser = z.infer<typeof PublicUserSchema>;
//# sourceMappingURL=user.d.ts.map