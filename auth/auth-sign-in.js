
'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users } = require('../models');


module.exports = async (req, res, next) => {
  // Users.beforeCreate(() => {

  // });

  try {
    if (!req.headers.authorization) return 'Not Authorized';
    let basicHeaderParts = req.headers.authorization.split(' ');
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');

    const user = await Users.findOne({ where: { username: username } });
    console.log(user);
    const valid = await bcrypt.compare(password, user.password);

    if (valid) {
      req.user = user;
      next();
    }
    else {
      next('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }

};



