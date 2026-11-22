// src/errors.ts
export class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthError';
    }
}
//# sourceMappingURL=errors.js.map