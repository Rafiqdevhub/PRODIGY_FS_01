const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const userVerification = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", userVerification);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
