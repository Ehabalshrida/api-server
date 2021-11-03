'use strict';

// Our table schema
const food = (sequelize, DataTypes) => sequelize.define('food', {

    typeOffood: {
        type: DataTypes.STRING,
    
    },
    numberOfeaters: {
        type: DataTypes.STRING,
      }
  });
  
  module.exports = food;