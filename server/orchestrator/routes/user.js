const router = require("express").Router();

const UserController = require("../controllers/UserController");

router.get("/token", UserController.getToken);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
