import { z } from 'zod';
export declare const RunStartPayloadSchema: z.ZodObject<{
    runId: z.ZodString;
    runnerId: z.ZodString;
    startedAt: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export type RunStartPayload = z.infer<typeof RunStartPayloadSchema>;
export declare const RunTickPayloadSchema: z.ZodObject<{
    runId: z.ZodString;
    runnerId: z.ZodString;
    point: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
        altitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        accuracy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        speed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        heading: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodNumber;
    }, z.core.$strip>;
    distanceMeters: z.ZodNumber;
    durationSeconds: z.ZodNumber;
}, z.core.$strip>;
export type RunTickPayload = z.infer<typeof RunTickPayloadSchema>;
export declare const RunFinishPayloadSchema: z.ZodObject<{
    runId: z.ZodString;
    runnerId: z.ZodString;
    endedAt: z.ZodCoercedDate<unknown>;
    status: z.ZodEnum<{
        active: "active";
        paused: "paused";
        completed: "completed";
        discarded: "discarded";
    }>;
    distanceMeters: z.ZodNumber;
    durationSeconds: z.ZodNumber;
}, z.core.$strip>;
export type RunFinishPayload = z.infer<typeof RunFinishPayloadSchema>;
//# sourceMappingURL=run.events.d.ts.map