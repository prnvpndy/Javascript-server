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
let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let validUsers=[];
let invalidUsers=[];

// function for validate the email.
function validateEmail(email){
      return checkEmail.test(String(email).toLowerCase());
}

//function for validate the users
function validateUsers(users)
{   
    users.forEach((user)=>{
    const {traineeEmail,reviewerEmail} = user;
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