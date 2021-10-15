const router = require("express").Router();
const itemRouter = require("./item");

router.use("/items", itemRouter);

module.exports = router;
