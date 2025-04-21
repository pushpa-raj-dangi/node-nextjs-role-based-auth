import { verifyToken } from '../utils/jwt.js';

export const authenticateJWT = (req, res, next) => {
const authHeader = req.headers.authorization;
if (!authHeader) return res.sendStatus(401);

const token = authHeader.split(' ')[1];
try {
const payload = verifyToken(token);
(req).user = payload;
next();
} catch {
res.sendStatus(403);
}
};
