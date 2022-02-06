const userSchema = require("../../models/userdata");

const deleteAccount = async (username, password) => {
	try {
		return await userSchema
			.find({ username: `${username}`}, {password: `${password}`})
			.exec();
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = deleteAccount;
