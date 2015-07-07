'use strict';

angular.module('dopCodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/',
        templateUrl: 'app/chat/chat.html',
        controller: 'ChatCtrl'
      });
  });