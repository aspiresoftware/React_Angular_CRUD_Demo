'use strict';
angular.module('myApp', ['react','ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/home');
  // Now set up the states
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'js/home/home.html',
    controller:'HomeController',
    data: {
        requireLogin: false
      }
    }).state('about', {
    url: '/about',
    templateUrl: 'js/about/about.html',
    controller: 'AboutController',
    data: {
        requireLogin: true
      }
    }).state('edit', {
    url: '/edit',
    templateUrl: 'js/edit/edit.html',
    controller: 'EditController',
    data: {
        requireLogin: true
      }
    })
    .state('delete', {
    url: '/delete',
    templateUrl: 'js/delete/delete.html',
    data: {
        requireLogin: true
      }
    })
    .state('register', {
    url: '/register',
    templateUrl: 'js/register/register.html',
    controller: 'RegisterController',
    data: {
        requireLogin: false
      }
    });
}).run(function ($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && window.auth.getToken()) {

    } else if(!requireLogin && window.auth.getToken()){
      event.preventDefault();
      $state.go('about');
    } else if(requireLogin && !window.auth.getToken()){
      event.preventDefault();
      $state.go('home');
    } else {
      
    }
  });
});;