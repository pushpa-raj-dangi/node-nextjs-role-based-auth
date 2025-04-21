import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import User from '../entities/User.js';
import Role from '../entities/Role.js';
import UserRole from '../entities/UserRole.js';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Role, UserRole],
});
