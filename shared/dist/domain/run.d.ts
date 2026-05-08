import { z } from 'zod';
export declare const RunStatusSchema: z.ZodEnum<{
    active: "active";
    paused: "paused";
    completed: "completed";
    discarded: "discarded";
}>;
export type RunStatus = z.infer<typeof RunStatusSchema>;
export declare const RunSchema: z.ZodObject<{
    id: z.ZodString;
    runnerId: z.ZodString;
    startedAt: z.ZodCoercedDate<unknown>;
    endedAt: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    status: z.ZodEnum<{
        active: "active";
        paused: "paused";
        completed: "completed";
        discarded: "discarded";
    }>;
    distanceMeters: z.ZodNumber;
    durationSeconds: z.ZodNumber;
    averagePace: z.ZodNullable<z.ZodNumber>;
    path: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
        altitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        accuracy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        speed: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        heading: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Run = z.infer<typeof RunSchema>;
//# sourceMappingURL=run.d.ts.map