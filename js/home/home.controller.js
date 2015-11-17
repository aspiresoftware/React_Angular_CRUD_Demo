'use strict';
 angular.module('myApp').controller('HomeController',function ($scope,$state){
 	$scope.homecontroller = {};
 	$scope.homecontroller.handleSubmit = function() {
 		$state.go('about');
 	}
 });