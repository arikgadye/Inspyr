
'use strict';

var app = angular.module('booksApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  ])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "/app/main/main.html",
      controller: "MainCtrl"
    })
    .when('/users', {
      templateUrl: "/app/users/users.html",
      controller: 'UsersCtrl'
    })
    .when('/users/:id', {
      templateUrl: "/app/user/user.html",
      controller: 'UserCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});