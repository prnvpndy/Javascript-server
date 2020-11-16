<<<<<<< HEAD
import { Router } from "express";
import UserController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import validation from "./validation";
import authMoiddleWare from "../../libs/routes/authMiddleWare";

const userRouter = Router();
userRouter.route('/login')
      .post(authMoiddleWare(), validationHandler(validation.create), UserController.create)

export default userRouter;
=======
// create a routes.ts file
import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMoiddleWare from '../../libs/routes/authMiddleWare';

const UserRouter = Router();

UserRouter.route('/me')
    .get(authMoiddleWare('getUser', 'read'), UserController.me);

UserRouter.route('/login')
    .post(UserController.login);



export default UserRouter;






// import { Router } from 'express';
// import validationHandler from '../../libs/validationHandler';
// import validation from './validation';

// import userController from './Controller';

// // import {authMiddleWare} from '../../libs/routes/'


// const userRouter  = Router();

// userRouter.route('/')
//       .get( validationHandler (validation.get), userController.get)
//       .post(validationHandler(validation.create), userController.create)
//       .put(validationHandler(validation.update), userController.update)
//       .delete(validationHandler(validation.delete), userController.delete);
// export default userRouter;
>>>>>>> c865f9ecbb5c9769306f210bed89ef094b198b2f
