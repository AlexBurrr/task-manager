const router = require("express").Router();
const {
	registerUser,
	loginUser,
	userInfo
} = require("../controllers/userControllers");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/myInfo").post(userInfo);

module.exports = router;
