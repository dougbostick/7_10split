const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weight: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    gender: {
        type: Sequelize.ENUM('men', 'women'),
        allowNull: true,
    },
    imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://www.shockwave.com/sites/default/files/_GAME_IMAGES/picons/gutterball_xl.jpg'
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;