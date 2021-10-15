const router = require("express").Router();
const ItemController = require("../controllers/ItemController");
const { authentication, authorization } = require("../middlewares/auth");

router.use(authentication);

router.get("/", ItemController.getAll);
router.get("/:id", ItemController.getByID);
router.post("/", ItemController.create);

router.use("/:id", authorization);

router.put("/:id", ItemController.update);
router.delete("/:id", ItemController.delete);

module.exports = router;
