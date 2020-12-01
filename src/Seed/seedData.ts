import UserRepository from '../repositories/user/UserRepository';
import user from '../Seed/mock';

const userRepo: UserRepository = new UserRepository();
export default () => {
    userRepo.count()
    .then(res => {
        if (res === 0) {
            userRepo.create(user.user1);
            userRepo.create(user.user2);
        }
    })
    .catch(err => console.log(err));
};