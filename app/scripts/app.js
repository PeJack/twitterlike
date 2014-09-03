'use strict';

/**
 * @ngdoc overview
 * @name opAppApp
 * @description
 * # opAppApp
 *
 * Main module of the application.
 */
angular
  .module('opAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-websql',
    'ui.bootstrap'
  ])
 
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



