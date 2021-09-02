const Router = require("express").Router;

const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);

module.exports = {
  userRouter: userRouter,
};
