const UserController = require('../app/controllers').UserController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

   app.post('/api/createUser', UserController.create);
};