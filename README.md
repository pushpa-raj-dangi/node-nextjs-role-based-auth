# Node-NextJS-Role-Based-Auth

A robust role-based authentication system built with Node.js, Next.js, and JWT. This project provides secure user authentication, role-based access control (RBAC), and protected routes for both API and frontend.

## Features

- **JWT Authentication**: Secure token-based authentication with access and refresh tokens.
- **Role-Based Access Control (RBAC)**: Define `user` and `admin` roles to restrict access to routes.
- **Protected Routes**: Middleware for safeguarding API endpoints (Express) and frontend pages (Next.js).
- **User Management**: Registration, login, and profile management endpoints.
- **Context API**: Frontend state management for user authentication status and roles.
- **Environment Variables**: Configurable settings for Postgres SQL, JWT secrets, and API endpoints.

## Prerequisites

- Node.js v14+ and npm v6+
- Postgres SQL (local or cloud instance)
- Basic knowledge of React, Next.js, and Express.js

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/node-nextjs-role-based-auth.git
   cd node-nextjs-role-based-auth
