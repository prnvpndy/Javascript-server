import config from '../config/configuration';
import * as bcrypt from 'bcrypt';


export default function hashFunction(){

     return bcrypt.hashSync(config.password, 10)

}