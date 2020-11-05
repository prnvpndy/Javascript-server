import { Router } from 'express';

import userController from './Controller';
//import validationHandler from '../../libs/validationHandler';
//import validation from './validation';
//import {authMiddleWare} from '../../libs/routes/'


const userRouter  = Router();

userRouter.route('/')
      .get(userController.get)
      .post(userController.create)
      .put(userController.update)
      .delete(userController.delete)

export default userRouter;   
