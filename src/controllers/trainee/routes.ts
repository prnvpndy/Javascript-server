import { Router } from 'express';

import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes/';


const traineeRouter  = Router();

traineeRouter.route('/')
      .get(authMiddleWare('getUser', 'read'), validationHandler(validation.get), TraineeController.get)
      .post(authMiddleWare('getUser', 'write'),validationHandler(validation.create), TraineeController.create)
      .put(authMiddleWare('getUser', 'write'),validationHandler(validation.update), TraineeController.update)
      .delete(authMiddleWare('getUser', 'write'), validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;
