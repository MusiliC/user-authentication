const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")

const userController = require("../controllers/userController");


router.post("/", userController.createUser);
router.get("/", userController.getUsers)
router.get("/:id", userController.getUser)
router.post("/login", userController.logUser);

module.exports = router;