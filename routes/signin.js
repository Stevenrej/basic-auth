
const authSignIn = require('../auth/auth-sign-in');

const express = require('express');

const router = express.Router();


router.post('/signin', authSignIn, async (req, res) => {



  console.log(req.user);
  res.status(200).send(req.user);

});

module.exports = router;
