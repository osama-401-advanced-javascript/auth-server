'use strict'
const server = require('./src/server.js');
const mongoose= require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI ;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((err) => console.error(err.message));