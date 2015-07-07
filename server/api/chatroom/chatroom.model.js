'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChatroomSchema = new Schema({
  name: String,
  userIds: String,
  active: Boolean
});

module.exports = mongoose.model('Chatroom', ChatroomSchema);