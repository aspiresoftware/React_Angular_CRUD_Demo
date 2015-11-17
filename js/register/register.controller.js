'use strict';
 angular.module('myApp').controller('RegisterController',function ($scope, $state){
  $scope.register_state = {};
  $scope.register_state.redirectToHome = function() {
    $state.go('home');
  }
 });