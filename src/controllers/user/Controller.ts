


import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../../config/configuration';
import { userModel } from "../../repositories/user/UserModel";
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
            console.log("sdfgdgffgd",req.body)
            const {email, password } = req.body;
            console.log("dfggf",req.body);
            userModel.findOne({ email: email }, (err, result) => {
                if (result!=null) {
                    if (password === result.password) {
                        result.password = bcrypt.hashSync(result.password, 10);
                        const token = jwt.sign({ result }, 'qwertyuiopasdfghjklzxcvbnm123456');
                        console.log(result);
                        console.log(token);
                        res.send({
                            data: token,
                            message: 'Login successfully',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'Password Doesnt Match',
                            status: 400
                        });
                    }
                }
                else {
                    res.send({
                        message: 'Email is not Registered',
                        status: 404
                    });
                }
            });
        }
        catch (err) {
            console.log('Error',err)
            res.send(err);
        }
    }
}
export default UserController.getInstance();