//*Transform according to project

require("../config/db");

const usersModel = require("../models/userdata");
const users = require("../data/users.json");

const populateUserCollection = async () => {
	await usersModel.deleteMany({});
	console.info("> users clean! 🗑️");

	await usersModel.insertMany(users);
	console.info("> users added! 🔥");
};

const main = async () => {
	await populateUserCollection();
	process.exit(0);
};

main();
