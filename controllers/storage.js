const { storageModel } = require("../models");

const getItems = async (req, res) => {
	const data = await storageModel.find({});
	res.send({ data });
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
	const { body, file } = req;
	const filedata = {
		filename: file.filename,
		url: `${process.env.PUBLIC_URL}/${file.filename}`,
	};
	const data = await storageModel.create(filedata);
	res.send({ file });
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
