'use strict';

app
.controller('MainCtrl', function ($scope, $rootScope, $http, $location) {
  $scope.user = {
    email: '',
    password: ''
  }

  $scope.modalOpen = false;

  $scope.openModal = function(){
    $scope.modalOpen = true;
  }
  $scope.signUp = function() {
    $location.path('/users')
  }
  $scope.closeModal = function() {
    console.log('clsoing')
    $scope.modalOpen = false;
  }
  $scope.go = function(location) {
    $location.path(location)
  }
});
