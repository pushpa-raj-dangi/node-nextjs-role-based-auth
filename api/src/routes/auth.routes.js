import { Router } from 'express';
import { register, login,getAllUsers } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/users', getAllUsers);

export default router;
