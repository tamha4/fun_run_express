const {Model, DataTypes} = require('sequelize');
const sequelize = require('services/database');

class Registration extends Model {}

//Initialize the table connected to the attributes
Registration.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    race_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},{
    sequelize,
    tableName: 'registrations', // This is the name of the table in the database
    modelName: 'registrations',
    timestamps: false //include this to ingore created/updated
});

module.exports = Registration;