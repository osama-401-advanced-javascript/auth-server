'use strict';
const express = require('express');
const router = express.Router();
const users = require('../auth/models/users/users-model.js');
const basicAuth = require('../auth/middleware/basic.js');
const oauth = require('./middleware/oauth.js');
const bearer = require('./middleware/bearer-auth.js');


router.post('/signup', (req, res) => {
  console.log(req.body);
  users.save(req.body).then((user) => {
    res.json(user);
  });
});
router.post('/signin', basicAuth, (req, res) => {
  //req.token is coming from the mw
  res.json({ token: req.token });
});
router.get('/users', (req, res) => {
  users.get().then((results) => {
    console.log(results);
    res.json({ results: results });
  });
});
router.get('/oauth', oauth, (req, res) => {
  console.log("GOOOOOOOOOOOD",req.token)
  res.json({token:req.token,user:req.user});
});


module.exports = router;