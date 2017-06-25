'use strict';
module.exports = function(app) {
  var userController = require('../controllers/controller');

  app.route('/users')
    .get(userController.listAllUsers)
    .post(userController.createUser);

  app.route('/login')
    .post(userController.login);

  app.route('/vote')
    .put(userController.updateUser);
};

