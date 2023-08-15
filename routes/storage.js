const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const authMiddleware = require("../middlewares/session");
const {
	getItems,
	getItem,
	createItem,
	deleteItem,
} = require("../controllers/storage");
//Validators import
const { getItemValidator } = require("../validators/storage");

router.get("/", getItems);
router.get("/:id", getItemValidator, authMiddleware, getItem);
router.post("/", uploadMiddleware.single("myfile"), authMiddleware, createItem);
router.delete("/:id", getItemValidator, authMiddleware, deleteItem);

module.exports = router;
