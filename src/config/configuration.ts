



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
const envVars = require ('dotenv').config()
// console.log("inside config" , envVars);
const config = {
    port : envVars.parsed.PORT,
    nodeEnv : envVars.parsed.NODE_ENV,
    mongoUrl : envVars.parsed.MONGO_URL,
};

Object.freeze( config );
export default config;

// export default configurations;
