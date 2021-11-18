require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const express = require("express");
const app = express();

//Mongoose connection
const connectDB = require("./DataBase/connectDB");

//Routers
const orderRouter = require("./routers/orderRouters");
const userRouter = require("./routers/UserRouters");
const productRouter = require("./routers/productPouters");

//require custom middleware
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");

//Middleware
app.use(express.json());
app.use(cors());

//Routs
app.get("/", (req, res) => {
  res.send(`<h1>Drone Haven</h1><a href="/api/v1/products">Feature Drone</a>`);
});

app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

//use Custom middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5050;

(async () => {
  try {
    //Connect to database
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`look at http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
})();
