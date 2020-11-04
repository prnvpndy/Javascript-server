// all the constant values in above file.
const permissions: Ipermission={
      'getUsers': {
      all: ['head-trainer'],
      read : ['trainee', 'trainer'],
      write : ['trainer'],
      delete: [],
      },
      'getUsers1': {
          all: ['head-trainer'],
          read : ['trainee', 'trainer'],
          write : ['trainer'],
          delete: [],
          }
  };
  import { Ipermission } from "./interfaces";
  export {permissions};