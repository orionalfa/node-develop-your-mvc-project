const { productRouter } = require("./product-router");
const { modelRouter } = require("./model-router");
const { userRouter } = require("./user-router");

module.exports = {
  productRouter: productRouter,
  modelRouter: modelRouter,
  userRouter: userRouter,
};
