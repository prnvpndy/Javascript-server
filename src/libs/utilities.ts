import config from '../config/configuration';
import { Request, Response, NextFunction, request } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
import { isNamedExportBindings } from 'typescript';


export default function createHashPassword(password){

     const hashPass = bcrypt.hashSync(password, 10)
     return hashPass;

}
const userRepository = new UserRepository();

export async function compareHashPassword (password, email){
     
    const data= await userRepository.findOne({ email }) 
              
         if(data){
              const comaprePass= await bcrypt.compareSync(password,data.password)
              
              return comaprePass;
} 
}
