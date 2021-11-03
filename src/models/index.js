'use strict';
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const Food=require('./food');
const Clothes=require('./clothes');

const Collection=require('./collection-class');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};
  let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);


  const food = Food(sequelize,DataTypes);
  const clothes=Clothes(sequelize,DataTypes);
  const foodcollection= new Collection(food);
  const clothescollection=new Collection(clothes);

  


  module.exports = {
    db: sequelize,
    foodcollection:foodcollection,
    clothescollection:clothescollection
  };