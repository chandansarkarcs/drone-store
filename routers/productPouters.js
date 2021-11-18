const router = require("express").Router();

const {
  creatNewProduct,
  getAllProduct,
  deleteProduct,
  getProduct,
} = require("../Controllers/productController");

//order controller
router.route("/").post(creatNewProduct).get(getAllProduct);
router.route("/:id").get(getProduct).delete(deleteProduct);

module.exports = router;
