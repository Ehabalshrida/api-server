'use strict';

const clothes = (sequelize, DataTypes) => {
    sequelize.define('Clothes', {
        tshirtColler: {
            type: DataTypes.STRING,
        }, 
        pantsColler: {
            type: DataTypes.STRING,
        }
    });
}

module.exports = clothes;