const express = require("express");
const router = express.Router();

//Controllers import
const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require("../controllers/tracks");

//Middlewares import
const customHeader = require("../middlewares/customHeader");

//Validators import
const {
	createItemValidator,
	getItemValidator,
} = require("../validators/tracks");

//Routes creation
router.get("/", getItems);
router.get("/:id", getItemValidator, getItem);
router.post("/", createItemValidator, customHeader, createItem);
router.put("/:id", getItemValidator, createItemValidator, updateItem);
router.delete("/:id", getItemValidator, createItemValidator, deleteItem);

module.exports = router;
