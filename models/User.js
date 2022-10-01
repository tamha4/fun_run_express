const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');

class User extends Model {}

User.init({
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    tableName: 'users',
    modelName: 'users',
    timestamps: false
});

module.exports = User;