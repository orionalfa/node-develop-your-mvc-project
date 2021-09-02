const Router = require("express").Router;

const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.post("/sign-in", userController.userSignIn);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);

module.exports = {
  userRouter: userRouter,
};
