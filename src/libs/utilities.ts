import config from '../config/configuration';
import { Request, Response, NextFunction, request } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';


export default function createHashPassword(password){

     const hashPass = bcrypt.hashSync(password, 10)
     return hashPass;

}
const userRepository = new UserRepository();

export function compareHashPassword (req: Request, res: Response, next: NextFunction){
     const { email, password } = req.body;
     console.log("sgfvsahghg")
    const data= userRepository.findOne({ email }) 
              
         if(data){
              console.log("hsdjhsgdvjvjhs");
     const comaprePass= bcrypt.compareSync(password,data.password)
     console.log("ggfsh",comaprePass)
    return true;
         };
         return false;
}