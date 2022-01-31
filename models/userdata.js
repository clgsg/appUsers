const mongoose=require('mongoose');
const {Schema}=mongoose;

const validateEmail = function (email) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const userSchema = new Schema({
	firstname: {
		type: String,
		unique: false,
		required: true,
	},
	lastname: {
		type: String,
		unique: false,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
		minlength: 6,
		maxlength:16,
		immutable: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
		validate: [validateEmail, "Please type a valid email address"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please type a valid email address",
		],
	},
	password: {
		type: String,
		unique: false,
		required: true,
	},
	birthdate: {
		type: Date,
		unique: false,
		required: true,
	},
});

module.exports = mongoose.model("users", userSchema)