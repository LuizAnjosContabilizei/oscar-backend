'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.listAllUsers = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) {
      res.status(400);
      res.send(err);
    }
    res.json(user);
  });
};

exports.login = function(req, res) {
  var reqBody = req.body;
  var query = {
    email: reqBody.email,
    password: reqBody.password,
  };
  User.find(query, function(err, user) {
    if (err)
      res.send(err);
    if (user.length === 0) {
      res.status(401);
      res.json({});
    } else {
      res.json(user[0]);
    }
  });
};

exports.updateUser = function(req, res) {
  var criteria = { email: req.body.email };
  User.findOneAndUpdate(criteria, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

