let valid_users:string[]=[],invalid_users:string[]=[];
// define a function validateUsers for validate the email.
function validateUsers(users)
{   
    users.forEach((users)=>{
    const {traineeEmail,reviewerEmail} = users;
    if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
        valid_users.push("("+traineeEmail+", "+reviewerEmail+") ");
      }
      else{
          invalid_users.push("("+traineeEmail+", "+reviewerEmail+") ");
      }
});
let validlen=valid_users.length;
console.log("Total valid users:",validlen);
console.log("The users are: ",valid_users);
let invalidlen=invalid_users.length;
console.log('Total invalid users',invalidlen);
console.log('The users is: ',invalid_users);
}
//validateUsers(users);


//import function validateEmail from helpers.js file.
import{validateEmail} from './helpers.js';

// export the functions validateUsers and validateEmail
export{validateUsers};
export {validateEmail};