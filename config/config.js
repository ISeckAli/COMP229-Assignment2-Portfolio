// Load environment variables from the private .env file.
import dotenv from "dotenv";

dotenv.config();

// Central configuration used by the backend server.
const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;