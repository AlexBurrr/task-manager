const express = require("express");
const dotenv = require("dotenv").config();
const goalsRoutes = require("./routes/goalRoutes");

const app = express();

const port = process.env.PORT;

app.use("/api/goals", goalsRoutes);

app.listen(port, () => {
	console.log(`server running on port: ${port} `);
});
