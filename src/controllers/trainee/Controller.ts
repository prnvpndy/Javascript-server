import UserRepository from '../../repositories/user/UserRepository';
import { createHashPassword } from '../../libs/utilities';


const userRepository: UserRepository = new UserRepository();
class TraineeController {
      static instance: TraineeController;
      static getInstance() {
            if (TraineeController.instance) {
                  return TraineeController.instance;
            }
            TraineeController.instance = new TraineeController();
            return TraineeController.instance;

      }
      userRepository: UserRepository = new UserRepository();

      public get(req, res, next) {
            let { limit = 0, skip = 0, searchText } = req.query;
            skip = Number(skip);
            limit = Number(limit);

            const options = {
                  limit,
                  skip,
                  sort: { name: -1, email: -1 },
            }
            const query = {};
            if (searchText) {
                  query['$or'] = [{ name: new RegExp(searchText, 'i') }, { email: new RegExp(searchText, 'i') }]
            }          
            
                  userRepository.getAll( query , {}, options)

                        .then((data) => {
                              res.status(200).send({
                                    status: 'ok',
                                    message: 'Fetched Successfully',
                                    Trainees: data
                              });
                        })
                        .catch((err) => {
                              res.send({
                                    message: 'Not Fetched',
                                    status: 404
                              });
                        });

              
      }

      public async create(req, res, next) {
            try {
                  const { role, name, email, password } = req.body;
                  const hashPassword = createHashPassword(password);
                  userRepository.create({ role, name, email, password: hashPassword })
                        .then((res1) => {

                              res.status(200).send({ message: 'Trainee created successfully', data: res1 });
                        });
            } catch (err) {
                  res.status(200).send({ message: 'Inside error block', error: err });
            }
      }

      public async update(req, res, next) {
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
      

      public delete = (req, res, next) => {
            try {
                const id = req.query.id;
                const userData = userRepository.findOne({ originalId: id })
                userRepository.findOne({ originalId: id })
                const remover = id;
                const user = new UserRepository();
                user.delete(id, remover)
                    .then((result) => {
                        res.send({
                            status: 'OK',
                            message: 'Deleted successfully', result,
                            code: 200,
                            data: result
                        });
                    })
            }
            catch (err) {
                res.send({
                    message: 'User not found to be deleted',
                    code: 404
                });
            };
        }
}
export default TraineeController.getInstance();