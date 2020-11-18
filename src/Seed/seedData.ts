<<<<<<< HEAD
//import UserRepository from '../repositories/user/UserRepository';
=======
// import UserRepository from '../repositories/user/UserRepository';
>>>>>>> 56c7da70885cd9c062b5e11d293ea0795f10613f

// const userRepository: UserRepository = new UserRepository();
// export default () => {
//       userRepository.count()

//         .then(res => {
//             console.log('The Count is: ', res );
//             if (res === 0) {
//                 console.log('data seeding in progress');
//                 userRepository.create({
//                     name: 'Head Trainer',
//                     role: 'head-trainer',
//                     email: 'headtrainer@successive.tech',
//                     password: 1234
//                 });
//                 userRepository.create({
//                     name: 'Trainee',
//                     role: 'trainee',
//                     email: 'trainee@successive.tech',
//                     password: 123
//                 });
//             }
//              else {
//             console.log('data is already seeded');
//                 }
//         })
//         .catch(err => console.log(err));
// };



import UserRepository from '../repositories/user/UserRepository';
import user from '../Seed/mock';
<<<<<<< HEAD
// import user2 from '../Seed/mock';

=======


>>>>>>> 56c7da70885cd9c062b5e11d293ea0795f10613f
const userRepo: UserRepository = new UserRepository();
export default () => {
    userRepo.count()
    .then(res => {
        if (res === 0) {
            console.log('data seeding in progress');
            userRepo.create(user.user1);
            userRepo.create(user.user2);
        }
    })
    .catch(err => console.log(err));
};