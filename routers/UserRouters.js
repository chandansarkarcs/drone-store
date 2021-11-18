const router = require("express").Router();

const {
  creatNewUser,
  findUser,
  updateUser,
} = require("../Controllers/userController");

//order controller
router.route("/").post(creatNewUser).get(findUser);
router.route("/:email").patch(updateUser);

module.exports = router;
