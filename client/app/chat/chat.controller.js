'use strict';

angular.module('dopCodeApp')
  .controller('ChatCtrl', function ($scope, socket, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.messages = [];

    var user = $scope.getCurrentUser || {};
    var chat = socket.socket;
    var simpleChat = angular.element("#simpleChat");
    var connCnt = 0;
    
    chat.on('start', function(data) {
        connCnt = data.connCnt;

        var userEmail = user.email || "No email";
        if(!user._id) {
            user = null;
        }

        if( user && user.provider == "twitter") {
            userEmail = user.twitter.screen_name;
        }

        var userName = user ? user.name + "(" + userEmail + ")" : "Guest(" + connCnt + ")";

        $scope.send = function() {
            if($scope.message == '') {
                return;
            }
            chat.emit('simpleChat', { msg : userName + " : " + $scope.message });
            $scope.message = '';
        };

        chat.on('simpleChat', function(data) {
            $scope.messages.push(data.msg);
            setTimeout(function() {
                console.log(angular.element(window).scrollTop(0));
                simpleChat.scrollTop(simpleChat[0].scrollHeight + 20);    
            }, 100);
        });
    });
    
    chat.emit('start', {});
  });
