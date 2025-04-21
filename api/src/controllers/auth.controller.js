import bcrypt from 'bcryptjs';
import { AppDataSource } from '../config/data-source.js';
import { generateToken } from '../utils/jwt.js';
import User from '../entities/User.js';

const userRepo = AppDataSource.getRepository(User);

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  const user = userRepo.create({ email, password: hashed });
  await userRepo.save(user);

  res.status(201).json({ message: 'User registered' });
};

export const login = async (req, res)=> {
  const { email, password } = req.body;
  const user = await userRepo.findOne({
    where: {
      email
    },
    relations: ["userRoles", "userRoles.role"],
  });
  
  if (!user) return res.status(404).json({ message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  
  if (!match) return res.status(401).json({ message: 'Invalid password' });

 

  const token = generateToken(user.id,email,user.userRoles.map((ur) => ur.role.name));
res.json({ email,token,role:user.userRoles.map((ur) => ur.role.name) });
};


export const getAllUsers = async (req, res) => {
  const users = await userRepo.find();
  res.json(users);
}
