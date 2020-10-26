'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const morgan = require('morgan');
// const users = require('../src/auth/models/users/users-model.js');
// const basicAuth = require('./auth/middleware/basic.js');
const router = require('../src/auth/router.js');
// const logger = require('../middleware/logger.js');
const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
// const apiRouter = require('../routes/api.js');
app.use(express.json());
app.use(express.static('./public'));

app.use(morgan('dev'));
app.use(cors());
app.use('/', router);



const PORT = process.env.PORT || 4000;
app.get('/bad', (req, res) => {
  throw new Error('a test error');
});
app.use('*', notFound);
app.use(errorHandler);
module.exports = {
  server: app,
  start: () => {
    app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  },
};

