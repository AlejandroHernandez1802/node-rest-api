const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const createItemValidator = [
	check("name").exists().notEmpty(),
	check("album").exists().notEmpty(),
	check("cover").exists().notEmpty(),
	check("artist").exists().notEmpty(),
	check("artist.name").exists().notEmpty(),
	check("artist.nickname").exists().notEmpty(),
	check("artist.nacionality").exists().notEmpty(),
	check("duration").exists().notEmpty(),
	check("duration.start").exists().notEmpty(),
	check("duration.end").exists().notEmpty(),
	check("mediaid").exists().notEmpty().isMongoId(),
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

module.exports = { createItemValidator, getItemValidator };
