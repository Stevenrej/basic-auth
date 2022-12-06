'use strict';



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
  return users;
};

module.exports = UserModel;
