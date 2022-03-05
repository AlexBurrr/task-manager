const router = require("express").Router();

router.get("/", (req, res) => {
	res.status(200).json({ message: "api" });
});

router.post("/", (req, res) => {
	res.status(200).json({ message: "posted goal" });
});

router.put("/:id", (req, res) => {
	res.status(200).json({ message: `updated task ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
	res.status(200).json({ message: `deleted task ${req.params.id}` });
});

module.exports = router;
