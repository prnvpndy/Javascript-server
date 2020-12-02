import config from '../config/configuration';
import * as bcrypt from 'bcrypt';


export default function hashFunction(password){

     const hashPass = bcrypt.hashSync(password, 10)
     return hashPass;

}