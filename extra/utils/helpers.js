
// Move the function validateEmail from validation.js to here
let checkemail = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;
function validateEmail(email)
{
return checkemail.test(String(email).toLowerCase());
}

// now export it
export {validateEmail};
