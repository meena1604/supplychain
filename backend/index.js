require("dotenv").config();
const jwtSecret = process.env.JWTPRIVATEKEY; // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Database connection
const userRoutes = require("./routes/users"); // User routes
const authRoutes = require("./routes/auth"); // Authentication routes

const app = express();
const port = process.env.PORT || 8000; // Set port from environment or default to 8000

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
db(); // Ensure that the connection to the database is established

// Routes
app.use("/api/users", userRoutes); // User-related routes
app.use("/api/auth", authRoutes); // Authentication routes

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log that the server is running
});
