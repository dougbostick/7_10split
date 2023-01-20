const Sequelize = require('sequelize');
const db = require('../db');

const LineItem = db.define('lineItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaltValue: 0
    }
})

module.exports = LineItem;