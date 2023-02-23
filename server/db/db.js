const Sequelize = require('sequelize');
const pkg = require('../../package.json');
require('dotenv').config();

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// client.connect();

// client.query(
//   'SELECT table_schema,table_name FROM information_schema.tables;',
//   (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   }
// );

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

// const db = new Sequelize(
//   process.env.DATABASE_URL || `postgres://localhost:5432/7_10splitdb`,
//   config
// );

const db = new Sequelize({
  database: 'd1krrtamjg5pco',
  username: 'hitkekkxwzqhsa',
  password: 'ac8817e2c8dbeb707759d057a5839b371a133df3ac2d10a181d3c586f2887217',
  host: 'ec2-34-192-210-139.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});
module.exports = db;

//postgres://hitkekkxwzqhsa:ac8817e2c8dbeb707759d057a5839b371a133df3ac2d10a181d3c586f2887217@ec2-34-192-210-139.compute-1.amazonaws.com:5432/d1krrtamjg5pco
