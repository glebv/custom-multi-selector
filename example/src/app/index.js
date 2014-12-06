'use strict';

angular.module('app', [
    'ui.router',
    'cs.comp'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider
      .otherwise('/');
  })
  .config(function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  });
