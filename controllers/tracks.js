const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");

const getItems = async (req, res) => {
	try {
		const data = await tracksModel.find({});
		res.send({ data });
	} catch (err) {
		console.log(err);
		handleHttpError(res, "There wa an error while trying to get the tracks");
	}
};

const getItem = async (req, res) => {
	try {
		req = matchedData(req);
		const { id } = req;
		const data = await tracksModel.findById(id);
		res.send({ data });
	} catch (err) {
		handleHttpError(res, "Error while trying to get item");
	}
};

const createItem = async (req, res) => {
	try {
		const body = matchedData(req);
		const data = await tracksModel.create(body);
		res.send({ data });
	} catch (err) {
		handleHttpError(res, "There wa an error while trying to create the track");
	}
};

const updateItem = async (req, res) => {
	try {
		const { id, ...body } = matchedData(req);
		const data = await tracksModel.findByIdAndUpdate(id, body, {
			new: true,
		});
		res.send({ data });
	} catch (err) {
		handleHttpError(res, "There wa an error while trying to update the track");
	}
};

const deleteItem = async (req, res) => {
	try {
		const { id } = matchedData(req);
		const data = await tracksModel.delete({ _id: id });
		res.send({ data });
	} catch (err) {
		console.log(err);
		handleHttpError(res, "There wa an error while trying to delete the track");
	}
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
