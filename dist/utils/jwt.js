import { createHash, randomUUID } from 'node:crypto';
import { SignJWT, jwtVerify } from 'jose';
function requiredSecret(name) {
    const value = process.env[name];
    if (!value || value.length < 32) {
        throw new Error(`${name} is missing or too short (min 32 chars)`);
    }
    return value;
}
const accessSecret = new TextEncoder().encode(requiredSecret('JWT_ACCESS_SECRET'));
const refreshSecret = new TextEncoder().encode(requiredSecret('JWT_REFRESH_SECRET'));
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