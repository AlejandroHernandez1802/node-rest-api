require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/mongo");
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

//Routes import
app.use("/api", require("./routes"));

app.listen(port, () => {
	console.log("Server running successfully");
});

dbConnection();
