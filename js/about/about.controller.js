'use strict';
 angular.module('myApp').controller('AboutController',function ($scope, $state){
 	$scope.aboutProps = {};
 	$scope.aboutProps.handleSubmit = function() {
 		$state.go('home');
 	};
 });