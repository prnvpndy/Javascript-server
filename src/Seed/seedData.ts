import UserRepository from '../repositories/user/UserRepository';
import user1 from '../Seed/mock';
import user2 from '../Seed/mock';

const userRepo: UserRepository = new UserRepository();
export default () => {
    userRepo.count()
    .then(res => {
        if (res === 0) {
            console.log('data seeding in progress');
            userRepo.create(user1);
            userRepo.create(user2);
        }
    })
    .catch(err => console.log(err));
};