'use strict';

/**
 * @ngdoc function
 * @name middlewareAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the middlewareAngularApp
 */
angular.module('middlewareAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
