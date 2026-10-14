// Import Mongoose for the MongoDB database connection.
import mongoose from "mongoose";

// Import the configured Express application.
import app from "./server/express.js";

// Import the existing asset router from the MERN starter project.
import router from "./server/assets-router.js";

// Import the backend configuration containing the port and MongoDB URI.
import config from "./config/config.js";

// Mount the asset router used by the starter project.
app.use("/src", router);

// Backend welcome route required for the portfolio application.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to My Portfolio application.",
  });
});

// Connect the backend application to the Portfolio MongoDB database.
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("MongoDB database connected successfully.");

    // Start the Express server only after MongoDB connects successfully.
    app.listen(config.port, () => {
      console.log(`Server running at http://localhost:${config.port}/`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

export default app;