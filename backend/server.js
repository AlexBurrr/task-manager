const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalsRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/ErrorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

app.use("/api/goals", goalsRoutes);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`server running on port: ${port} `);
});
