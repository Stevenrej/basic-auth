'use strict';

const express = require('express');
const router = express.Router();
const { Users } = require('../models/index');

router.post('/signup', async (req, res) => {
  try {


    const record = await Users.create(req.body);
    console.log(record);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

module.exports = router;
