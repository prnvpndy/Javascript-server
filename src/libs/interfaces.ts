
// create interfaces according to the instruction mention in ticket#39520

interface Ipermission{
      'getUsers':{
   all:string[];
   read:string[];
   write:string[];
   delete:[];
  },
  'getUsers1':{
      all:string[];
      read:string[];
      write:string[];
      delete:[];
     }
  };
  
  interface Iusers{
          traineeEmail : string;
          reviewerEmail: string;
      
  
  };
  export{Ipermission};
  
  export{Iusers};