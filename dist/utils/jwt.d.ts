import { type JWTVerifyResult } from 'jose';
export declare function createAccessToken(userId: number, role: string): Promise<string>;
export declare function createRefreshToken(userId: number): Promise<string>;
export declare function verifyRefreshToken(token: string): Promise<JWTVerifyResult>;
export declare function hashRefreshToken(token: string): string;
export declare function daysFromNow(days: number): Date;
