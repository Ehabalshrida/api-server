'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const PORT=process.env.PORT;
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const {foodRouter} = require('./routes/food')
const {clothesRouter} = require('./routes/clothes')


app.get('/person',validator, (req, res)=> {
    res.json({
       name: req.name,
    });
});


app.get('/', (req, res)=> {
    res.send('You Are Welcome')
});
  

app.use(express.json());
app.use(foodRouter);
app.use(clothesRouter);

app.use(logger);
app.use('*', notFoundHandler);
app.use(errorHandler);
function start() {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }
  
  module.exports = {
    app,
    start
  };