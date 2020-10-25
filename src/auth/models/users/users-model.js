'use strict';
const jwt = require('jsonwebtoken');
const userModel = require('../users/users-schema.js');
const bcrypt = require('bcrypt');
const Collection = require('../mongo.js');
const SECRET = process.env.SECRET;
class User extends Collection {
  constructor() {
    super(userModel);
  }
  async save(record) {
    let userObj = await this.get({ username: record.username });
    console.log('loooooooooooooooog', userObj);
    console.log('loooooooooooooooog2222', record);
    if (userObj.length == 0) {
      record.password = await bcrypt.hash(record.password, 5);
      console.log('loooooooooooooooog2222', record);
      await this.create(record);
      return record;
    } else {
      console.log('This username is exists');
      return Promise.reject();
    }
  }
  async authenticateBasic(user, password) {
    let userObj = await this.get({ username: user });
    console.log('userobj', userObj);
    const valid = await bcrypt.compare(password, userObj[0].password);
    console.log('valid', valid);
    return valid ? userObj[0] : Promise.reject();
  }
  generateToken(user) {
    const token = jwt.sign({ username: user.username }, SECRET);
    return token;
  }
}
module.exports = new User();