'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./user');
const DATABASE_URL = 'sqlite:memory';
const sequelizeInstance = new Sequelize(DATABASE_URL);

module.exports = {
  dataBase: sequelizeInstance,
  Users: UserModel(sequelizeInstance, DataTypes),
};


