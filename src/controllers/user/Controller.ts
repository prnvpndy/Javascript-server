import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../../config/configuration';
//import { userModel } from "../../repositories/user/UserModel";
const userRepository = new UserRepository();
class UserController {
    static instance: UserController;
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    me(req: any, res: Response, next: NextFunction) {
        const { user } = req;
        return res.status(200).send({ message: 'Me', status: 'ok', data: user });
    }
    login(req: Request, res: Response, next: NextFunction) {

        try {
            console.log("sdfgdgffgd", req.body)
            const { email, password } = req.body;
            console.log("dfggf", req.body);
            userRepository.findOne({ email: email })
                .then((data) => {
                    if (data != null) {
                        if (password === data.password) {
                            data.password = bcrypt.hashSync(data.password, 10);
                            const token = jwt.sign({ data }, 'qwertyuiopasdfghjklzxcvbnm123456');
                            console.log(data);
                            console.log(token);
                            res.send({
                                data: token,
                                message: 'Login successfully',
                                status: 200
                            });
                        }
                    }
                        else {
                            res.send({
                                message: 'Password Doesnt Match',
                                status: 400
                            });
                        }                    
                });
               
            } catch(err) {
        console.log('Error', err)
        res.send(err);
    }

}
}
export default UserController.getInstance();