const mongoose = require("mongoose");

const goalsSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: [true, "please add text"]
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("goal", goalsSchema);
