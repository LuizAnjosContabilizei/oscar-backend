'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'O nome do usuário é obrigatório'
  },
  email: {
    type: String,
    required: 'O e-mail é obrigatório'
  },
  password: {
    type: String,
    required: 'A senha é obrigatória'
  },
  movieId: {
    type: Number
  },
  directorId: {
    type: Number
  }
});

module.exports = mongoose.model('Users', UserSchema);

