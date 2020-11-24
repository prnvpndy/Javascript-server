// 
//==================================
// create a class according to instructions that mention in #39523
import { NextFunction, Response, Request } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import UserRepository from '../../repositories/user/UserRepository';
class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;;
    }
    // constructor() {
    //     //this.get = this.get.bind(this);
    //     //this.create = this.create.bind(this);
    //     this.update = this.update.bind(this);
    //     this.delete = this.delete.bind(this);
    // }
    userRepository: UserRepository = new UserRepository();
    get = (req, res, next) => {
        try {
            console.log('Inside GET method of Trianee controller ');
            this.userRepository.getAll()
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'successfully fetched Trainee', data: res1 })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create = (req, res, next) => {
        try {
            const {role, name, email, password} = req.body;
            console.log('Inside POST method of Trianee controller ');
            this.userRepository.create({ role, name, email, password })
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'Trainee created successfully', data: res1 })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    update = (req, res, next) => {
        try {
            const { role, name, id, email, password } = req.body;
            console.log('Inside Update method of Trianee controller ',id);
            
            userModel.findOne({ _id: id }, (err, result) => {
                
                console.log("result",result)
                
                if (result != null) {

                    this.userRepository.update(id,{ name: name, role: role, email: email })
                        .then((data) => {
                            console.log("respnse is ", data);
                            res.status(200).send({ message: "successfully upddate", data: data });
                        })
                }
            })


        } catch (err) {
            console.log('Inside Error', err);
        }
    }

    // public delete = (req, res, next) => {
    //     try {
    //         const id = req.params.id;
    //         const userData = userModel.findOne({ originalId: id })
    //         userModel.findOne({ originalId: id })
    //         console.log(id, "hhhhh")
    //         const remover = '5fb3663da080091a8c21d58b';
    //         console.log(remover, " remover")
    //         const user = new UserRepository();
    //         user.deleteData(id, remover)
    //             .then((result) => {
    //                 res.send({
    //                     message: 'Deleted successfully', result,
    //                     code: 200,
    //                     data: result
    //                 });
    //             })
    //     }
    delete = (req: Request, res: Response, next: NextFunction) => {

        try {
        const { id } = req.query;
        console.log(id);
        userModel.findOne({ originalId: id }, (err, result1) => {
        if (result1 !== undefined) {
        this.userRepository.deleteData(id, result1.id)
        .then((result) => {
        console.log('Data deleted successfully');
        res.status(200).send({ message: 'Data Deleted successfully', data: result });
        });
        }
        else {
        console.log('User not found to be deleted');
        res.send({
        message: 'User not found to be deleted',
        code: 404
        });
        }
        });
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