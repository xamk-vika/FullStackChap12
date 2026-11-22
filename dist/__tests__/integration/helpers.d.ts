export declare function createTestUser(overrides?: Partial<{
    email: string;
    username: string;
    password: string;
}>): Promise<{
    user: any;
    accessToken: any;
    cookies: string;
    userData: {
        email: string;
        username: string;
        password: string;
    };
}>;
