import { createHash, randomUUID } from 'node:crypto';
import { SignJWT, jwtVerify } from 'jose';
const accessSecret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
const refreshSecret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET);
export async function createAccessToken(userId, role) {
    return new SignJWT({ role })
        .setProtectedHeader({ alg: 'HS256' })
        .setSubject(String(userId))
        .setJti(randomUUID())
        .setIssuedAt()
        .setExpirationTime('15m')
        .sign(accessSecret);
}
export async function createRefreshToken(userId) {
    return new SignJWT({})
        .setProtectedHeader({ alg: 'HS256' })
        .setSubject(String(userId))
        .setJti(randomUUID())
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(refreshSecret);
}
export async function verifyRefreshToken(token) {
    return jwtVerify(token, refreshSecret);
}
export function hashRefreshToken(token) {
    return createHash('sha256').update(token).digest('hex');
}
export function daysFromNow(days) {
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}
//# sourceMappingURL=jwt.js.map