const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const colors = require("colors");

const User = require("../models/userModel");

const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			res.status(400);
			throw new Error("enter all input fields".red);
		}
		const userExistsCheck = await User.findOne({ email });
		if (userExistsCheck) {
			throw new Error("user already exists bitch".red);
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		console.log("all good so far".green);

		const user = await User.create({
			name,
			email,
			password: hashedPassword
		});

		if (user) {
			res
				.status(200)
				.json({ _id: user.id, name: user.name, email: user.email });
		} else {
			res.status(400);
			throw new Error("user already taken".red);
		}
	} catch (error) {
		console.log(error);
	}
};

const loginUser = async (req, res) => {
	res.status(200).send("user logged in".green);
};

const userInfo = async (req, res) => {
	res.status(200).send("users info".green);
};

module.exports = { registerUser, loginUser, userInfo };
