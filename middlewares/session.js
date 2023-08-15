const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");

const authMiddleware = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			handleHttpError(res, "There's no token", 404);
			return;
		}
		const token = req.headers.authorization.split(" ").pop();
		const tokenData = await verifyToken(token);
		if (!tokenData._id) {
			handleHttpError(res, "There's no id in the token");
			return;
		}
		const user = await usersModel.findById(tokenData._id);
		req.user = user;
		next();
	} catch (err) {
		handleHttpError(res, "There's no an available session", 401);
	}
};

module.exports = authMiddleware;
