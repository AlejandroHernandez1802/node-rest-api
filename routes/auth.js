const express = require("express");
const router = express.Router();
const { registerController, loginController } = require("../controllers/auth");

//Validators import
const { registerValidator, loginValidator } = require("../validators/auth");

//Routes creation
router.post("/register", registerValidator, registerController);
router.post("/login", loginValidator, loginController);

module.exports = router;
