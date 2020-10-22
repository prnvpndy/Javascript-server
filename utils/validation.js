let users = [
      {
            traineeEmail: "prnv@successive.tech",
            reviewerEmail: "pandey@successive.tech"
      },
      {
            traineeEmail: "prnv@successive.tech*1",
            reviewerEmail: "pandey@successive.tech"
      },
      {
            traineeEmail: "prnv@successive.tech",
            reviewerEmail: "pandey@successive.tech"
      },
      {
            traineeEmail: "prnv@successive.tech",
            reviewerEmail: "pandey@successive.tech"
      },
      {
            traineeEmail: "prnv@successive.te/",
            reviewerEmail: "pandey@successive.tech//*"
      },
      {
            traineeEmail: "prnv@successive.te/*",
            reviewerEmail: "pandey@successive.t"
      },
      {
            traineeEmail: "prnv@successive.tech",
            reviewerEmail: "pandey@successive.tech"
      },
      {
            traineeEmail: "prnv@successive.tech98",
            reviewerEmail: "pandey@successive.tech"
      }
];

//Will check her formating of emails
let checkEmail = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;

let validUsers=[];
let invalidUsers=[];

// function for validate the email.
function validateEmail(email){
      return checkEmail.test(String(email).toLowerCase());
}

//function for validate the users
function validateUsers(users)
{   
    users.forEach((users)=>{
    const {traineeEmail,reviewerEmail} = users;
    if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
        validUsers.push("("+traineeEmail+", "+reviewerEmail+") ");
      }
      else{
          invalidUsers.push("("+traineeEmail+", "+reviewerEmail+") ");
      }

});

//It will findout the valid users
let validEmailLength=validUsers.length;
console.log("Total valid users:",validEmailLength);
console.log("The users are: ",validUsers);

//It will findout who are invalid users
let invalidEmailLength=invalidUsers.length;
console.log('Total invalid users',validEmailLength);
console.log('The users is: ',invalidUsers);
}

validateUsers(users);