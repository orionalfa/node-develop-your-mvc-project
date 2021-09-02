const Router = require("express").Router;

const { modelController } = require("../controllers");

const modelRouter = Router();

// modelRouter.get("/", modelController.getAllProducts);
// modelRouter.get("/:id", productController.getProductById);
// modelRouter.patch("/:id", productController.updateProduct);
// modelRouter.delete("/:id", productController.deleteProduct);
// modelRouter.post("/add", productController.addNewProduct);

module.exports = {
  modelRouter: modelRouter,
};
