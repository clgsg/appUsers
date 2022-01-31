const deleteAccount = require('../../queries/users/deleteAccount');

module.exports = async (req, res, next) => {
	const username = req.query.username;
	const password = req.query.password;

	if(!username || !password){
		next();
	} else {
		await deleteAccount;
		res.status(200).json({
			success: true,
			message: "ok",
		})
	}
}