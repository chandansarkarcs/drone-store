const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Featured: {
    type: Boolean,
    required: true,
  },
  Material: {
    type: String,
    required: true,
  },
  ProductDetail: {
    type: String,
    required: true,
  },
  ModelName: {
    type: String,
    required: true,
  },
  MediaType: {
    type: String,
  },
  Color: {
    type: String,
    required: true,
  },
  BrandName: {
    type: String,
    required: true,
  },
  AvailableQuantity: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    default: 4,
  },
  Image: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
