




// const envVars = require('dotenv').config();

// console.log("Inside config");
// //console.log(dotenv);

// const config= envVars.parsed;
// Object.freeze(config);

// export default config;

// import { config } from 'dotenv';
// config();
import IConfig from './IConfig';
import dotenv from 'dotenv';

const envVars = require ('dotenv').config();
const config = {
    port : envVars.parsed.PORT,
    nodeEnv : envVars.parsed.NODE_ENV,
    mongoUrl : envVars.parsed.MONGO_URL,
    password: envVars.parsed.password,
    secretKey: envVars.parsed.secretKey
};

Object.freeze( config );
export default config;
