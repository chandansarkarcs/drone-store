const Product = require("../schema/productSchema");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const { _id: productID } = req.params;
  const product = await Product.find({ _id: productID });
  res.status(200).json(product);
};

const creatNewProduct = async (req, res) => {
  const data = await Product.create(req.body);
  res.status(201).json(data);
};

const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;
  const result = await Product.findOneAndDelete({ _id: productID });
  res.status(204).json(result);
  console.log(productID);
};

module.exports = {
  creatNewProduct,
  getAllProduct,
  deleteProduct,
  getProduct,
};
