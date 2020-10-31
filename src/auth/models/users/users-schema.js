'use strict';

const mongoose = require('mongoose');

const user = mongoose.Schema({
  username: {type: String, required: true,unique:true},
 
  password: {type: String, required: true},
  role: {
    type: String,
    required: true,
    enum: ['user', 'writer', 'admin', 'editor'],
  },

});

module.exports = mongoose.model('userModel', user);