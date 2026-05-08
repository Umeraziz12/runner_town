import { verifyToken } from '../utils/auth.js';
export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }
        const decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            next();
        }
        else {
            res.status(403).json({ message: 'Forbidden: Invalid token' });
        }
    }
    else {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
};
//# sourceMappingURL=authMiddleware.js.map