// create a class according to instructions that mention in #39523
import { NextFunction, Response, Request } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import UserRepository from '../../repositories/user/UserRepository';
const userRepository = new UserRepository();
class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;;
        
    }
    
    get(req, res, next) {
        try {            
            console.log('Inside GET method of Trianee controller ');
            userRepository.getAll()
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'successfully fetched Trainee', data: res1 })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create (req, res, next)  {
        try {
            const {role, name, email, password} = req.body
            console.log('Inside POST method of Trianee controller ');
            userRepository.create({ role, name, email, password})
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'Trainee created successfully', data: res1 })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    update (req, res, next){
        try {
            const { role, name, id, email, password } = req.body;
            console.log('Inside Update method of Trianee controller ', id);

            userModel.findOne({ originalId: id }, (err, result) => {

                console.log("result", result)

                if (result != null) {

                    userRepository.update(id, { updatedAt:Date.now(), updatedBy:id, createdBy:id, deletedAt:Date.now(), deletedBy: id, name:name || result.name, role: role || result.role, email:email || result.email, password: password || result.password })
                        .then((data) => {
                            console.log("respnse is ", data);
                            res.status(200).send({ message: "successfully update", data: data });
                        })
                }
            })


        } catch (err) {
            console.log('Inside Error', err);
        }
    }

 
    public delete (req, res, next){
        try {
            const id = req.params.id;
            const userData = userModel.findOne({ originalId: id })
            userModel.findOne({ originalId: id })
            console.log(id, "  Value of ID")
            const remover = '5fb363da080091a8c21d58b';
            console.log(remover, " remover")
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

//export default new TraineeController();