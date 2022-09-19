const {Sequelize } = require('sequelize');

const sequelize = new Sequelize("","","", {
    dialect: 'sqlite',
    host: './funrun.sqlite'
});

module.exports = sequelize;