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
let checkemail = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;

let valid_users=[];
let invalid_users=[];

// function for validate the email.
function validateEmail(email){
      return checkemail.test(String(email).toLowerCase());
}

//function for validate the users
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

//It will findout the valid users
let validlen=valid_users.length;
console.log("Total valid users:",validlen);
console.log("The users are: ",valid_users);

//It will findout who are invalid users
let invalidlen=invalid_users.length;
console.log('Total invalid users',invalidlen);
console.log('The users is: ',invalid_users);
}

validateUsers(users);