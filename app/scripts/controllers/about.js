'use strict';

/**
 * @ngdoc function
 * @name opAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the opAppApp
 */
angular.module('opAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
