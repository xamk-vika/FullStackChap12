export function authorize(...allowedRoles) {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            res.status(403).json({ error: 'FORBIDDEN' });
            return;
        }
        next();
    };
}
//# sourceMappingURL=authorize.js.map