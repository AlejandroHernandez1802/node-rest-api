const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const uploadFileValidator = [
	check("url").exists().notEmpty(),
	check("filename").exists().notEmpty(),
	(req, res, next) => {
		return validateResults(req, res, next);
	},
];

const getItemValidator = [
	check("id").exists().notEmpty().isMongoId(),
	(req, res, next) => {
		return validateResults(req, res, next);
	},
];

module.exports = { getItemValidator };
