// import the function of diamondpattern and equilateTriangle from patterns/index
import {diamondpattern, equilateTriangle} from './pattern/index.js';

// calling the function and pass the arguments
diamondpattern(5);
console.log();
equilateTriangle(4);

// import the hasPermission from utils/index and permissions from constants
import {hasPermission} from './utils/index.js';
import {permissions} from './constant.js';

// calling the hasPermission method and pass the arguments.
hasPermission(permissions.getUsers,'head-trainer','all');
console.log();

// import the functions from validateUsers and validdateEmail from util/index
import {validateUsers} from './utils/index';
import {validateEmail} from './utils/index';




// define constant values according to the instruction given in the ticket39519
const users=
[
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

import{Iusers} from './interfaces';
// calling the function validateUsers and pass the arguments.
validateUsers(users);
