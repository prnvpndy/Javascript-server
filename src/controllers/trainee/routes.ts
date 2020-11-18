import { Router } from 'express';

import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes/';


const traineeRouter  = Router();

traineeRouter.route('/')
      .get(authMiddleWare('getUser', 'all'), validationHandler(validation.get), TraineeController.get)
      .post(validationHandler(validation.create), TraineeController.create)
      .put(validationHandler(validation.update), TraineeController.update)
      .delete(validationHandler(validation.delete), TraineeController.delete);
<<<<<<< HEAD
=======

>>>>>>> 56c7da70885cd9c062b5e11d293ea0795f10613f
export default traineeRouter;
