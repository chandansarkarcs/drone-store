const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "without an email an order can't accepted"],
  },
  displayName: String,
  Phone: String,
  productID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  date: {
    type : Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Order", orderSchema);
