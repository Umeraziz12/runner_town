import { z } from 'zod';
export declare const PresenceJoinPayloadSchema: z.ZodObject<{
    userId: z.ZodString;
    username: z.ZodString;
    position: z.ZodOptional<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PresenceJoinPayload = z.infer<typeof PresenceJoinPayloadSchema>;
export declare const PresenceLeavePayloadSchema: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;
export type PresenceLeavePayload = z.infer<typeof PresenceLeavePayloadSchema>;
export declare const PresenceMovePayloadSchema: z.ZodObject<{
    userId: z.ZodString;
    position: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>;
    timestamp: z.ZodNumber;
}, z.core.$strip>;
export type PresenceMovePayload = z.infer<typeof PresenceMovePayloadSchema>;
//# sourceMappingURL=presence.events.d.ts.map