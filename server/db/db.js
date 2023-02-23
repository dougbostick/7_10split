const Sequelize = require('sequelize');
const pkg = require('../../package.json');
require('dotenv').config();

const config = {
  logging: false,
};

const db = new Sequelize({
  database: 'd1krrtamjg5pco',
  username: 'hitkekkxwzqhsa',
  password: 'ac8817e2c8dbeb707759d057a5839b371a133df3ac2d10a181d3c586f2887217',
  host: 'ec2-34-192-210-139.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = db;
