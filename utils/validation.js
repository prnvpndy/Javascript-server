let index = 0
let users = [
      { traineeEmail: 'trainee1successive.tech'  ,
       reviewerEmail: 'reviewer1@successive.tech'},
      /*{ mentorEmail: 'mentor@successive'},
      { leadEmail: 'teamleadsuccessive.tech'},
      { rmEmail: 'rm'}*/
      ]
 
      
function validateEmail(users){
      let reg =/^\w+([-+.']\w+)*@\w+([-.']\w+)*\.\w+([-.]\w+)*$/
      if (reg.test(users)){
            return true;
            
      }
      else {
            return false;
      }
}
//validateEmail('prnv@successive.tech');

function validateUser(users){
      
        
      valid=0;
      inValid=0;
      
      
      users.forEach(({traineeEmail, reviewerEmail})=> {
            if(validateEmail(traineeEmail)){
                  valid++;
            }
            else{
                  inValid++;
            }
            
      
      // const isValidT = validateEmail(traineeEmail);
      // const isValidR = validateEmail(reviewerEmail);


      });

     

      
}
validateUser(users);
console.log(valid);
console.log(inValid);

