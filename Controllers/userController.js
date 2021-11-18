const User = require("../schema/userSchema");

const findUser = async (req, res) => {
  const { email: userEmail } = req.query;
  const user = await User.find({ email: userEmail });
  res.status(200).json(user[0]);
};

const creatNewUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const { email } = req.params;

  const response = await User.findOneAndUpdate(
    { email: email },
    { role: "admin" },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(204).json(response);
  console.log(email);
};

module.exports = {
  creatNewUser,
  updateUser,
  findUser,
};
