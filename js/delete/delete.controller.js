'use strict';
 angular.module('myApp').controller('DeleteController',function ($scope, $state){
 	$scope.deletecontroller = {};
 	$scope.deletecontroller.redirectToHome = function() {
 		$state.go('home');
 	};
 });