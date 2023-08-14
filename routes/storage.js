const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
	getItems,
	getItem,
	createItem,
	deleteItem,
} = require("../controllers/storage");
//Validators import
const { getItemValidator } = require("../validators/storage");

router.get("/", getItems);
router.get("/:id", getItemValidator, getItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);
router.delete("/:id", getItemValidator, deleteItem);

module.exports = router;
