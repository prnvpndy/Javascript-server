import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction, request } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import config from '../../config/configuration';
import {compareHashPassword }from '../../libs/utilities';

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
    async login (req: Request, res: Response, next: NextFunction) {

        try {
            const { email, password } = req.body;
            const data = await userRepository.findOne({ email })            
            
                    if (data !== null) {
                        const hasAccess = compareHashPassword(password, data.password)
                        if (hasAccess) {              
                            const token = jwt.sign({ data }, config.secretKey, {
                              expiresIn: '15m'
                            });
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
                                message: 'User not exist',
                                status: 400
                            });
                        }
                
            } catch (err) {
                  res.status(200).send({ message: 'Inside error block', error: err });
        res.send(err);
    }

}
}
export default UserController.getInstance();

