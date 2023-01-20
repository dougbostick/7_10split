const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = Order;