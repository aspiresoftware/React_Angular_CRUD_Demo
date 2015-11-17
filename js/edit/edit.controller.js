'use strict';
 angular.module('myApp').controller('EditController',function ($scope, $state){
 	$scope.editcontroller = {};
 	$scope.editcontroller.redirectToAbout = function() {
 		$state.go('about');
 	};
 	$scope.editcontroller.redirectToHome = function() {
 		$state.go('home');
 	}
 });