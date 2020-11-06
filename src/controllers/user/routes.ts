import { Router } from 'express';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';

import userController from './Controller';

//import {authMiddleWare} from '../../libs/routes/'


const userRouter  = Router();

userRouter.route('/')
      .get(validationHandler(validation.get),userController.get)
      .post(validationHandler(validation.create),userController.create)
      .put(validationHandler(validation.update),userController.update)
      .delete(validationHandler(validation.delete),userController.delete)

export default userRouter;   
