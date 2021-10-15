const router = require("express").Router();

const itemsRouter = require("./item");
const usersRouter = require("./user");

router.use("/users", usersRouter);
router.use("/items", itemsRouter);

module.exports = router;
