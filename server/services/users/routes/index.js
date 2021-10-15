const router = require("express").Router();
const userRouter = require("./user");
const errorHandler = require("../middlewares/errorHandler");

router.use("/users", userRouter);

router.use(errorHandler);

module.exports = router;
