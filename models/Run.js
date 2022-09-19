const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');

class Run extends Model {}

Run.init({
    name: {
        type: DataTypes.STRING
    },
    run_type: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modeName: 'runs',
    timestamps: false
});

module.exports = Run;