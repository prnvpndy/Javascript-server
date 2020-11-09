import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import validation from "./validation";
import authMoiddleWare from "../../libs/routes/authMiddleWare";

const userRouter = Router();
userRouter.route('/login')
      .post(authMoiddleWare(), validationHandler(validation.create), UserController.create)

export default userRouter;