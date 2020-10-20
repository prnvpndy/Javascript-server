let index = 0
let users = [
      { traineeEmail: 'trainee1@successive.tech'  ,
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
validateEmail('prnv@successive.tech');

function validateUser(users){
      
      users.forEach(({traineeEmail, reviewerEmail})=> {
            console.log(traineeEmail, reviewerEmail);
      
      const isValidT = validateEmail(traineeEmail);
      const isValidR = validateEmail(reviewerEmail);


      }

     

      
      }
validateUser(users);

