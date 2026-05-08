import { z } from 'zod';
export declare const TerritoryClaimedPayloadSchema: z.ZodObject<{
    territory: z.ZodObject<{
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
    claimedBy: z.ZodString;
}, z.core.$strip>;
export type TerritoryClaimedPayload = z.infer<typeof TerritoryClaimedPayloadSchema>;
export declare const TerritoryContestedPayloadSchema: z.ZodObject<{
    territoryId: z.ZodString;
    challengerId: z.ZodString;
    ownerId: z.ZodString;
}, z.core.$strip>;
export type TerritoryContestedPayload = z.infer<typeof TerritoryContestedPayloadSchema>;
export declare const TerritoryExpiredPayloadSchema: z.ZodObject<{
    territoryId: z.ZodString;
}, z.core.$strip>;
export type TerritoryExpiredPayload = z.infer<typeof TerritoryExpiredPayloadSchema>;
//# sourceMappingURL=territory.events.d.ts.map