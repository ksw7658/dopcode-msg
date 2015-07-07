'use strict';

var _ = require('lodash');
var Chatroom = require('./chatroom.model');

// Get list of chatrooms
exports.index = function(req, res) {
  Chatroom.find(function (err, chatrooms) {
    if(err) { return handleError(res, err); }
    return res.json(200, chatrooms);
  });
};

// Get a single chatroom
exports.show = function(req, res) {
  Chatroom.findById(req.params.id, function (err, chatroom) {
    if(err) { return handleError(res, err); }
    if(!chatroom) { return res.send(404); }
    return res.json(chatroom);
  });
};

// Creates a new chatroom in the DB.
exports.create = function(req, res) {
  Chatroom.create(req.body, function(err, chatroom) {
    if(err) { return handleError(res, err); }
    return res.json(201, chatroom);
  });
};

// Updates an existing chatroom in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Chatroom.findById(req.params.id, function (err, chatroom) {
    if (err) { return handleError(res, err); }
    if(!chatroom) { return res.send(404); }
    var updated = _.merge(chatroom, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, chatroom);
    });
  });
};

// Deletes a chatroom from the DB.
exports.destroy = function(req, res) {
  Chatroom.findById(req.params.id, function (err, chatroom) {
    if(err) { return handleError(res, err); }
    if(!chatroom) { return res.send(404); }
    chatroom.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}