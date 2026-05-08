import { z } from 'zod';
export declare const TerritoryStatusSchema: z.ZodEnum<{
    active: "active";
    contested: "contested";
    expired: "expired";
}>;
export type TerritoryStatus = z.infer<typeof TerritoryStatusSchema>;
export declare const TerritorySchema: z.ZodObject<{
    id: z.ZodString;
    ownerId: z.ZodString;
    geometry: z.ZodArray<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.core.$strip>>;
    area: z.ZodNumber;
    capturedAt: z.ZodCoercedDate<unknown>;
    status: z.ZodDefault<z.ZodEnum<{
        active: "active";
        contested: "contested";
        expired: "expired";
    }>>;
}, z.core.$strip>;
export type Territory = z.infer<typeof TerritorySchema>;
//# sourceMappingURL=territory.d.ts.map