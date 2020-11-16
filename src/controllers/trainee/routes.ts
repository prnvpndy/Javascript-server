import { Router } from 'express';

import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes/';


const traineeRouter  = Router();

traineeRouter.route('/')
<<<<<<< HEAD
      // .get(authMiddleWare('getUser','all'),validationHandler(validation.get),traineeController.get)
      .post(validationHandler(validation.create),traineeController.create)
      .put(validationHandler(validation.update), traineeController.update)
      .delete(validationHandler(validation.delete), traineeController.delete)

export default traineeRouter;   
=======
      .get(authMiddleWare('getUser', 'all'), validationHandler(validation.get), TraineeController.get)
      .post(validationHandler(validation.create), TraineeController.create)
      .put(validationHandler(validation.update), TraineeController.update)
      .delete(validationHandler(validation.delete), TraineeController.delete);
      
export default traineeRouter;
>>>>>>> c865f9ecbb5c9769306f210bed89ef094b198b2f
