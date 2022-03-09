const errorHandler = (err, req, res, next) => {
	//res.status and res.statusCode is the same
	//this is saying if there is  status code
	//then to display that one else display 500
	const statusCode = res.statusCode ? res.statusCode : 500;

	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? null : err.stack
	});
};

module.exports = {
	errorHandler
};
