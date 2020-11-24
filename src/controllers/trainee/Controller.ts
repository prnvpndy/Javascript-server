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
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    userRepository: UserRepository = new UserRepository();
    get = async(req, res, next) => {
        try {
            console.log('Inside GET method of Trianee controller ');
            let sort: any;
            let trainee: any;
           
            if (req.query.sort === 'email') {
                sort = {email: req.query.sortedby };
            }
            else if (req.query.sort === 'name') {
                sort = {name: req.query.sortedby };
            } 
            else{
            sort = { createdAt: -1 };
            }
            let search: any;
            if (req.query.searchBy !== undefined) {
                search = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, { name: {$regex: req.query.searchBy}});
                const list = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, { email: { $regex: req.query.searchBy.toLowerCase()}});
                trainee = { ...search, ...list};   
                
            }
            else {
             trainee = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit, {});
            }
            // const trainee = await this.userRepository.list1(sort, req.query.skip, req.query.limit);
            const countTrainee = await this.userRepository.count()
            console.log('count is ' , countTrainee)
            this.userRepository.getAll()
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'successfully fetched Trainee', 
                    TotalCount: countTrainee, 
                    TraineeCount: trainee.length,
                    record: trainee 
                })
                })
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create = (req, res, next) => {
        try {
            console.log('Inside POST method of Trianee controller ');
            this.userRepository.create({ role: req.body.role, name: req.body.name })
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

    public delete = (req, res, next) => {
        try {
            const id = req.params.id;
            const userData = userModel.findOne({ originalId: id })
            userModel.findOne({ originalId: id })
            console.log(id, "hhhhh")
            const remover = '5fb3663da080091a8c21d58b';
            console.log(remover, " remover")
            const user = new UserRepository();
            user.deleteData(id, remover)
                .then((result) => {
                    res.send({
                        message: 'Deleted successfully', result,
                        code: 200,
                        data: result
                    });
                })
        }
        catch (err) {
            console.log('Inside Error', err);
        };
    }
    
}
export default TraineeController.getInstance();

//export default new TraineeController();