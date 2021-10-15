const router = require("express").Router();
const ProductController = require("../controllers/productController");
const { authentication, authorization } = require("../middlewares/auth");

router.use(authentication);

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getByID);
router.post("/", ProductController.create);

router.use("/:id", authorization);

router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

module.exports = router;
