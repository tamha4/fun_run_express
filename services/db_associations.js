const Run = require('models/Run');
const User = require('models/User');
const Registration = require('models/Registration');

const setAssociations = function() {
    //Define a many to many relationship through the CountryLanguage model
    Run.belongsToMany(User, {
        through: Registration,
        foreignKey: 'race_id', // The table field that relates to the Country model
        otherKey: 'user_id' // the table field that relates to the Language model
    });
    
    User.belongsToMany(Run, {
        through: Registration,
        foreignKey: 'user_id', // The table field that relates to the Language model
        otherKey: 'race_id' // the table field that relates to the Country model
    });

}

module.exports = setAssociations;