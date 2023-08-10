const mongoose = require("mongoose");
const dbConnection = () => {
	const dbUri = process.env.DB_URI;
	mongoose
		.connect(dbUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((res) => {
			console.log("Successfully connected to database!");
		})
		.catch((err) => {
			console.log("Unable to connect to the database");
		});
};

module.exports = dbConnection;
