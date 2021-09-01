const Router = require("express").Router;

const { productController } = require("../controllers");

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);

module.exports = {
  accountRouter: accountRouter,
};
