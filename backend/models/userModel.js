const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: [true, "please enter name"]
		},
		email: {
			type: String,
			required: [true, "please enter email"],
			unique: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
