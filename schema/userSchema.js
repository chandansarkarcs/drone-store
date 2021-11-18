const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  photoURL: String,
  Phone: String,
  role: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
