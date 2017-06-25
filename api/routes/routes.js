'use strict';
module.exports = function(app) {
  var userController = require('../controllers/controller');

  // todoList Routes
  app.route('/users')
    .get(userController.listAllUsers)
    .post(userController.createUser);

  app.route('/login')
    .post(userController.login);

  app.route('/vote')
    .put(userController.updateUser);

  // app.route('/users/:userId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};

