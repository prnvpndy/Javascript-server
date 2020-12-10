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

            let { limit = 0, skip = 0, searchBy } = req.query;
            skip = Number(skip);
            limit = Number(limit);

            const options = {
                  limit,
                  skip,
                  sort: { name: -1, email: -1 },
            }

            let sort: any;
            let trainee: any;
            //let search: any;
            const search = searchBy ? searchBy.toLowerCase() : "";
            console.log("search value", search)
            if (search) {
                  function escapeRegExp(text) {
                        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                  }
                  const regex = new RegExp(escapeRegExp(req.query.searchBy), 'gi');

                  userRepository.getAll({$or: [{name: {$regex: search, $options: 'i'}},{email: {$regex: search, $options: 'i'}}]}, {}, options)

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


            else {
                  trainee = this.userRepository.getAll('trainee', sort, {});
            }
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