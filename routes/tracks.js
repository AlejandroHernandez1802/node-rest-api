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
const authMiddleware = require("../middlewares/session");
const checkRole = require("../middlewares/role");

//Validators import
const {
	createItemValidator,
	getItemValidator,
} = require("../validators/tracks");

//Routes creation
router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, getItemValidator, getItem);
router.post(
	"/",
	authMiddleware,
	checkRole(["admin"]),
	createItemValidator,
	createItem
);
router.put(
	"/:id",
	authMiddleware,
	getItemValidator,
	createItemValidator,
	updateItem
);
router.delete(
	"/:id",
	authMiddleware,
	getItemValidator,
	createItemValidator,
	deleteItem
);

module.exports = router;
