'use strict'
const User = require('../models').User;
var passwordHash = require('password-hash');

module.exports = {

  show(req, res) {
   return User
     .findOne({
       where: {
          id: req.query.user_id,
         }
       })
     .then((user) => res.status(200).send(user))
     .catch((error) => res.status(400).send(error));
 },


  create(req, res) {
    return User
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: passwordHash.generate(req.body.password),
        active: 1
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  validate(req, res) {
    return User
      .findOne({
        where: {
          email: req.body.email
        },
      })
      .then(user => {
          if (passwordHash.verify(req.body.password, user.password)) {
            user
              .update({
                active: true
              })
            return res.status(200).send(user)
          } else {
            return res.status(401).send('Unauthorized')
          }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return User
    .findOne({
      where: {
        id: req.params.user_id,
      },
    })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }

      return user
        .update({
          email: req.body.email || user.email,
          password: req.body.password || user.password,
          active: req.body.active || user.active,
        })
        .then(updatedUser => res.status(200).send(updatedUser))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},



};
