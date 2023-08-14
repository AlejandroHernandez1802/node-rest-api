const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const fs = require("fs");

const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
	try {
		const data = await storageModel.find({});
		res.send({ data });
	} catch (err) {
		handleHttpError(
			res,
			"There was an error while trying to get the media files"
		);
	}
};

const getItem = async (req, res) => {
	try {
		const { id } = matchedData(req);
		const data = await storageModel.findById(id);
		res.send({ data });
	} catch (err) {
		handleHttpError(
			res,
			"There was an error while trying to get the media file"
		);
	}
};

const createItem = async (req, res) => {
	const { body, file } = req;
	const filedata = {
		filename: file.filename,
		url: `${process.env.PUBLIC_URL}/${file.filename}`,
	};
	const data = await storageModel.create(filedata);
	res.send({ file });
};

const deleteItem = async (req, res) => {
	try {
		const { id } = matchedData(req);
		const dataFile = await storageModel.findById(id);
		const { filename } = dataFile;
		const filePath = `${MEDIA_PATH}/${filename}`;
		fs.unlinkSync(filePath);
		const data = await storageModel.delete({ _id: id });
		res.send({ data });
	} catch (err) {
		console.log(err);
		handleHttpError(
			res,
			"There was an error wile trying to delete the media file"
		);
	}
};

module.exports = { getItems, getItem, createItem, deleteItem };
