import { z } from 'zod';
export declare const SignupRequestSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type SignupRequest = z.infer<typeof SignupRequestSchema>;
export declare const LoginRequestSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export declare const AuthUserSchema: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export type AuthUser = z.infer<typeof AuthUserSchema>;
export declare const AuthResponseSchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        email: z.ZodString;
    }, z.core.$strip>;
    token: z.ZodString;
}, z.core.$strip>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export declare const MeResponseSchema: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    createdAt: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export type MeResponse = z.infer<typeof MeResponseSchema>;
//# sourceMappingURL=auth.d.ts.map