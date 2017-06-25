'use strict';
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'O nome do usuário é obrigatório'
  },
  email: {
    type: String,
    required: 'O e-mail é obrigatório',
    unique: 'Já existe um usuário com esse e-mail'
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

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', UserSchema);

