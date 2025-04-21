import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET;

export const generateToken = (userId,email,role) => {
  return jwt.sign({ id: userId,email,role }, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
