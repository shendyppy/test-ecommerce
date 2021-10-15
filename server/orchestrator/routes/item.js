const router = require("express").Router();

const ItemController = require("../controllers/ItemController");

router.get("/", ItemController.getAll);
router.get("/:id", ItemController.getByID);
router.post("/", ItemController.create);

router.put("/:id", ItemController.update);
router.delete("/:id", ItemController.delete);

module.exports = router;
