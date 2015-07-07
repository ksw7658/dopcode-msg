'use strict';

angular.module('dopCodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/feature',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });