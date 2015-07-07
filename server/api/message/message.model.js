'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  chatroomId: String,
  message: String
});

module.exports = mongoose.model('Message', MessageSchema);