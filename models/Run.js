const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');

class Run extends Model {}

Run.init({
    name: {
        type: DataTypes.STRING
    },
    run_type: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
},{
    sequelize,
    modeName: 'runs',
    timestamps: false
});

module.exports = Run;