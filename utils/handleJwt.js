const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;

const tokenSign = async (user) => {
	const sign = await jwt.sign(
		{
			_id: user.id,
			role: user.role,
		},
		jwt_secret,
		{
			expiresIn: "2h",
		}
	);

	return sign;
};

const verifyToken = async (tokenJwt) => {
	try {
		return jwt.verify(tokenJwt, jwt_secret);
	} catch (err) {
		return null;
	}
};

module.exports = { tokenSign, verifyToken };
