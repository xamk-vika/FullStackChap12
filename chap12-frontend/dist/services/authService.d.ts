import type { RegisterInput, LoginInput } from '../schemas/auth.js';
export declare function registerUser(input: RegisterInput): Promise<{
    user: any;
    accessToken: string;
    refreshToken: string;
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: any;
    accessToken: string;
    refreshToken: string;
}>;
export declare function cleanupExpiredTokens(): Promise<any>;
