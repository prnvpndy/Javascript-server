import * as  bcrypt from 'bcrypt';
import config from '../config/configuration';


const user1 = {
    name: 'Head Trainer',
    role: 'head-trainer',
    email: 'headtrainer@successive.tech',
    password: bcrypt.hashSync(config.password, 10)
};

const user2 = {
    name: 'Trainee',
    role: 'Trainee',
    email: 'headtrainer@successive.tech',
    password: bcrypt.hashSync(config.password, 10)
};

export default {user1, user2};