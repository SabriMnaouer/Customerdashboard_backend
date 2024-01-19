const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());

// API routes
app.use("/api", require("./routes/customer")); // Assuming API routes are under /api

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
