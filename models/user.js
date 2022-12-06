'use strict';

const bcrypt = require('bcrypt');


const UserModel = (seq, DataTypes) => {
  let users = seq.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  users.beforeCreate( async (user) => {
    user.password = await bcrypt.hash(user.password, 7);
  });
  return users;
};

module.exports = UserModel;
