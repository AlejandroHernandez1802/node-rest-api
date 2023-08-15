const { handleHttpError } = require("../utils/handleError");

const checkRole = (availableRoles) => (req, res, next) => {
	try {
		const { user } = req;
		const userRoles = user.role;

		const checkValueRole = availableRoles.some((role) =>
			userRoles.includes(role)
		);
		if (!checkValueRole) {
			handleHttpError(
				res,
				"The user does not have permissions to perform this action",
				403
			);
			return;
		}
		next();
	} catch (err) {
		handleHttpError(res, "Permissions error", 403);
	}
};

module.exports = checkRole;
