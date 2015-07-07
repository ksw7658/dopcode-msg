/**
/**
 * Chat Socket.io configuration
 */

'use strict';

module.exports.register = function (socket, connCnt) {

    socket.emit('simpleChat', {msg : 'Welcome!'});
    socket.on('simpleChat', function(data) {
      socket.broadcast.emit('simpleChat', data); // 나를 제외한 모두에게 발송.
      socket.emit('simpleChat', data); // 나에게 발송
      console.log('Message from client : ' + data.msg);
    });
};