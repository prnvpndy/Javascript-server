



// //import * as dotenv from 'dptenv';
// const envVars = require('dotenv').config();

// console.log("Inside config");
// //console.log(dotenv);

// const config= envVars.parsed;
// Object.freeze(config);

// export default config;

// import { config } from 'dotenv';
// config();
import IConfig from './IConfig';
const envVars = require ('dotenv').config();
// console.log("inside config" , envVars);
const config = envVars.parsed;
Object.freeze( config );
export default config;

// export default configurations;
