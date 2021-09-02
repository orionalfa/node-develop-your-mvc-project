const Router = require("express").Router;

const { productController } = require("../controllers");

const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.patch("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.post("/add", productController.addNewProduct);

module.exports = {
  productRouter: productRouter,
};
