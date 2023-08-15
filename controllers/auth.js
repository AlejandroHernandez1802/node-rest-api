const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const registerController = async (req, res) => {
	try {
		req = matchedData(req);
		const password = await encrypt(req.password);
		const body = { ...req, password };
		const dataUser = await usersModel.create(body);
		const data = {
			user: dataUser,
			token: await tokenSign(dataUser),
		};
		res.send({ data });
	} catch (err) {
		handleHttpError(
			res,
			"There was an error with the registration of the user"
		);
	}
};

const loginController = async (req, res) => {
	try {
		req = matchedData(req);
		const user = await usersModel
			.findOne({ email: req.email })
			.select("password name role email");
		if (!user) {
			handleHttpError(res, "User not found", 404);
			return;
		}
		const hashedPassword = user.get("password");
		const check = await compare(req.password, hashedPassword);

		if (!check) {
			handleHttpError(res, "Invalid password", 401);
			return;
		}
		user.set("password", undefined, { strict: false }); //Avoid show the password on the data response
		const data = {
			token: await tokenSign(user),
			user,
		};
		res.send({ data });
	} catch (err) {
		handleHttpError(res, "There was an error with the login");
	}
};

module.exports = { registerController, loginController };
