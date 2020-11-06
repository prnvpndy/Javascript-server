import UserRepository from '../repositories/user/UserRepository';

const userRepo: UserRepository = new UserRepository();
export default () => {
    userRepo.count()
    .then(res => {
        if (res === 0) {
            console.log('data seeding in progress');
            userRepo.create({name: 'Head Trainer', role: 'head-trainer', email: 'headtrainer@successive.tech'});
            userRepo.create({name: 'Trainee', role: 'trainee', email: 'trainee@successive.tech'});
        }
    })
    .catch(err => console.log(err));
};