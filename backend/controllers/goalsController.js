const Goal = require("../models/goalsModel");

const getGoals = async (req, res) => {
	try {
		const goals = await Goal.find();
		res.status(200).json(goals);
	} catch (error) {}
};

const setGoal = async (req, res) => {
	try {
		if (!req.body.text) {
			res.status(400);
			throw new Error("please set goal ");
		}

		const goal = await Goal.create({
			text: req.body.text
		});

		res.status(200).json({ message: req.body.text });
	} catch (error) {
		console.log(error);
	}
};

const updateGoal = async (req, res) => {
	try {
		const goal = await Goal.findById(req.params.id);
		if (!goal) {
			res.status(400);
			throw new Error("goal not found");
		}
		const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});
		res.status(200).json({ message: `update goal ${updatedGoal}` });
	} catch (error) {
		console.log(error);
	}
};

const deleteGoal = async (req, res) => {
	try {
		const goal = await Goal.findById(req.params.id);
		if (!goal) {
			throw new Error("didnt find goal");
		}
		await goal.remove();
		res.status(200).json({ id: req.params.id });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal
};
