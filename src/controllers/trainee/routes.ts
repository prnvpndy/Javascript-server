import { Router } from 'express';

import traineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';


const traineeRouter  = Router();

traineeRouter.route('/')
      .get(validationHandler(validation.get),traineeController.get)
      .post(traineeController.create)
      .put(traineeController.update)
      .delete(traineeController.delete)

export default traineeRouter;
