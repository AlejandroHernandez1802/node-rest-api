const customHeader = (req, res, next) => {
	try {
		const api_key = req.headers.api_key;
		if (api_key === "123") return next();
		res.status(403);
		res.send({ err: "API_KEY is wrong" });
	} catch (err) {
		res.status(403);
		res.send({ err: "There was an error with the custom header" });
	}
};

module.exports = customHeader;
