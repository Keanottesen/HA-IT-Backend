'use strict'
const UserModel = require('../models').User;

module.exports = {
  create(req, res) {
    return UserModel
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  
};
