const Router = require("express").Router;

const { modelController } = require("../controllers");

const modelRouter = Router();

modelRouter.get("/", modelController.getAllModels);
modelRouter.get("/:id", modelController.getModelById);
modelRouter.patch("/:id", modelController.updateModel);
modelRouter.delete("/:id", modelController.deleteModel);
modelRouter.post("/add/:id", modelController.addNewModel);

module.exports = {
  modelRouter: modelRouter,
};
