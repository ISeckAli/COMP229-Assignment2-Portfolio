# COMP229 Assignment 2 - Portfolio Backend and REST APIs

This is my Assignment 2 project for COMP229 Web Application Development.

For this assignment I took my React portfolio from Assignment 1 and added the backend using Node.js, Express, MongoDB, and Mongoose. I also added REST APIs for contacts, projects, qualifications, and users.

I added authentication using JWT as well, including sign-up, sign-in, protected user routes, and sign-out.

## What I Added

- React portfolio client from Assignment 1
- Express backend running on port 5000
- MongoDB Atlas database called `Portfolio`
- Mongoose models
- REST API routes
- CRUD operations for:
  - Contacts
  - Projects
  - Qualifications
  - Users
- JWT authentication
- Password hashing
- Protected user routes
- Environment variables for database and authentication secrets
- One development command to run both the frontend and backend

## Technologies I Used

- React
- Vite
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Tokens
- express-jwt
- Thunder Client
- Nodemon
- Concurrently

## Running the Project

Install the root dependencies:

```bash
npm install
```

Install the client dependencies:

```bash
cd client
npm install
cd ..
```

Create a `.env` file in the root folder with these variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

The real `.env` file is not included in this repository because it contains private credentials.

Start the frontend and backend together:

```bash
npm run dev
```

The React client runs at:

```text
http://localhost:5173
```

The backend runs at:

```text
http://localhost:5000
```

## API Routes

### Contacts

```text
GET    /api/contacts
GET    /api/contacts/:id
POST   /api/contacts
PUT    /api/contacts/:id
DELETE /api/contacts/:id
```

### Projects

```text
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

### Qualifications

```text
GET    /api/qualifications
GET    /api/qualifications/:id
POST   /api/qualifications
PUT    /api/qualifications/:id
DELETE /api/qualifications/:id
```

### Users

```text
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

Some user routes are protected using JWT authentication.

## Authentication Routes

```text
POST /auth/signup
POST /auth/signin
GET  /auth/signout
```

Passwords are hashed before they are saved in MongoDB and password information is not returned through the API.

## Author

Ivan Seck Ali