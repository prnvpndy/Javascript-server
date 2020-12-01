
import { NextFunction, Response, Request } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
const userRepository = new UserRepository();
class TraineeController {
      static instance: TraineeController;
      static getInstance() {
            if (TraineeController.instance) {
                  return TraineeController.instance;
            }
            TraineeController.instance = new TraineeController();
            return TraineeController.instance;

      }

      get(req, res, next) {
            try {
                  console.log('Inside GET method of Trianee controller ');
                  userRepository.getAll()
                        .then((res1) => {
                              console.log('Response is: ', res1);
                              res.status(200).send({ message: 'successfully fetched Trainee', data: res1 });
                        });
            } catch (err) {
                  console.log('Inside Error', err);
            }
      }
      create(req, res, next) {
            try {
                  const { role, name, email, password } = req.body;
                  console.log('Inside POST method of Trianee controller ');
                  userRepository.create({ role, name, email, password })
                        .then((res1) => {
                              console.log('Response is: ', res1);
                              res.status(200).send({ message: 'Trainee created successfully', data: res1 });
                        });
            } catch (err) {
                  console.log('Inside Error', err);
            }
      }
      public async update(req, res, next) {
            console.log('Inside update method trainee');
            const { id, ...restData } = req.body;
            await userRepository.update(id, restData)
                  .then((result) => {
                        res.send({
                              status: 'ok',
                              message: 'Trainee Updated Successfully',
                              data: { result },
                        });
                  })
                  .catch((err) => {
                        res.send({
                              error: 'Trainee Not Found for update',
                              code: 404
                        });
                  });
      }
      public delete(req, res, next) {
            try {
                  const id = req.params.id;
                  const userData = userRepository.findOne({ originalId: id });
                  userRepository.findOne({ originalId: id });
                  const remover = '5fb363da080091a8c21d58b';
                  userRepository.delete(id, remover)
                        .then((result) => {
                              res.send({
                                    status: 'OK',
                                    message: 'Deleted successfully', result,
                                    code: 200,
                                    data: result
                              });
                        });
            }
            catch (err) {
                  res.send({
                        message: 'User not found to be deleted',
                        code: 404
                  });
            }
      }
}
export default TraineeController.getInstance();

