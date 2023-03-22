const Sequelize = require('sequelize');
const pkg = require('../../package.json');
require('dotenv').config();

const config = {
  logging: false,
};

const db = new Sequelize({
  database: 'd7dpuqjp8c082s',
  username: 'kgiupzwyezgrel',
  password: '2a2fa9ee4dadbd5e4fdd4c92d42b8ebd8b5aafd6496e19877a60656627777052',
  host: 'ec2-50-17-21-26.compute-1.amazonaws.com',
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
