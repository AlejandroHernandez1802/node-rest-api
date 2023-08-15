const bcrypt = require("bcryptjs");

const encrypt = async (passwordPlane) => {
	const hash = await bcrypt.hash(passwordPlane, 10);
	return hash;
};

const compare = async (passwordPlane, hashedPassword) => {
	return await bcrypt.compare(passwordPlane, hashedPassword);
};

module.exports = { encrypt, compare };
