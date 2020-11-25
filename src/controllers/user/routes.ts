// create a routes.ts file

import { Router } from "express";
import UserController from "./Controller";
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from "../../libs/routes/authMiddleWare";

const UserRouter = Router();

UserRouter.route('/me')
    .get(authMiddleWare('getUser', 'read'), UserController.me);

UserRouter.route('/login')
    .post(UserController.login);

export default UserRouter;
// 
