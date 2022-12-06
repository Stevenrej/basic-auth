'use strict';

const express = require('express');
const cors = require('cors');
const signInRouter = require('./routes/signin');
const signUpRouter = require('./routes/signup');




const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(signUpRouter);
app.use(signInRouter);



module.exports = {
  server: app,
  start: function(PORT){
    app.listen(PORT, function(){
      console.log('listening on port', PORT);
    });
  },
};
