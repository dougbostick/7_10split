//this is the access point for all things database related!

const db = require('./db');

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const User = require('./models/User');
const Product = require('./models/Product');
const LineItem = require('./models/LineItem');
const Order = require('./models/Order');

//associations could go here!
Order.belongsTo(User);
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    LineItem,
    Order,
  },
};
