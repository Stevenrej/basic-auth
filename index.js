'use strict';

// 3rd Party Resources



const { start } = require('./server.js');
const { dataBase } = require('./models/index.js');


// NOTE: connected to sqlite::memory out of box for proof of life
// TODO:
// connect postgres for local dev environment and prod
// handle SSL requirements
// connect with sqlite::memory for testing


// Prepare the express app

const PORT = process.env.PORT || 3000;


dataBase.sync()
  .then(() => {
    start(PORT);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

