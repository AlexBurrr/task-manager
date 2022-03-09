const getGoals = (req, res) => {
	res.status(200).json({ message: "get goals" });
};

const setGoal = (req, res) => {
	res.status(200).json({ message: "set goal" });
};

const updateGoal = (req, res) => {
	res.status(200).json({ message: `update goal ${req.params.id}` });
};

const deleteGoal = (req, res) => {
	res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal
};
