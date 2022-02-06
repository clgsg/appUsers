const userSchema = require("../../models/userdata");

const getUsers = async () => {
	try {
		return await userSchema
			.find({})
			// .exec();
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = getUsers;
