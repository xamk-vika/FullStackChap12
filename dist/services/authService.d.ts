import type { RegisterInput, LoginInput } from '../schemas/auth.js';
export declare function registerUser(input: RegisterInput): Promise<{
    user: {
        id: number;
        email: string;
        username: string;
        password: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: {
        id: number;
        email: string;
        username: string;
        role: import("../generated/prisma/enums.js").Role;
        createdAt: Date;
        updatedAt: Date;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare function cleanupExpiredTokens(): Promise<number>;
