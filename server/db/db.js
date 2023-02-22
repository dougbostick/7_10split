const Sequelize = require('sequelize');
const pkg = require('../../package.json');
require('dotenv').config();

// const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const config = {
  logging: false,
};

// if(process.env.LOGGING === 'true'){
//   delete config.logging
// }

// //https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
// if(process.env.DATABASE_URL){
//   config.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   };
// }

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/7_10splitdb`,
  config
);
module.exports = db;

//postgres://hitkekkxwzqhsa:ac8817e2c8dbeb707759d057a5839b371a133df3ac2d10a181d3c586f2887217@ec2-34-192-210-139.compute-1.amazonaws.com:5432/d1krrtamjg5pco
