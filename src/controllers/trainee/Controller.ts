import UserRepository from '../../repositories/user/UserRepository';
import { createHashPassword } from '../../libs/utilities';


const userRepository:UserRepository = new UserRepository();
class TraineeController {
      static instance: TraineeController;
      static getInstance() {
            if (TraineeController.instance) {
                  return TraineeController.instance;
            }
            TraineeController.instance = new TraineeController();
            return TraineeController.instance;

      }
      userRepository: UserRepository= new UserRepository();
       get= async(req, res, next)=> {
            try {
                  let sort: any;
                  if (req.query.sort === 'email') {
                        sort = { email: req.query.sortedby };
                  }
                  else if (req.query.sort === 'name') {
                        sort = { name: req.query.sortedby };
                  }
                  else
                        sort = { createdAt: -1 };
                  const trainee = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit);
                  const countTrainee =  await this.userRepository.count()
                  console.log("trainee data ",trainee)
                  console.log('count is ', countTrainee)
                  this.userRepository.getAll()
                        .then((res1) => {
                              res.status(200).send({ message: 'successfully fetched Trainee',TotalCount:countTrainee, TraineeCount:trainee.length, data: trainee });
                        });
            } catch (err) {
                  res.status(200).send({ message: 'Inside error block', error: err });
            }
      };
      create(req, res, next) {
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