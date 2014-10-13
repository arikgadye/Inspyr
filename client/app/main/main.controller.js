'use strict';

app
.controller('MainCtrl', function ($scope, $rootScope, $http, $location) {
  $scope.modalOpen = false;

  $scope.signUp = function(){
    $scope.modalOpen = true;
  }
  $scope.closeModal = function() {
    console.log('clsoing')
    $scope.modalOpen = false;
  }
	var styles = {	
		front: '.enter-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;   -webkit-transform:translate3d(100%,0,0)  }  .enter-setup.enter-start {   position:absolute;  -webkit-transform:translate3d(0,0,0)}  .leave-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;   -webkit-transform:translate3d(0,0,0)} .leave-setup.leave-start {   position:absolute;  -webkit-transform:translate3d(-100%,0,0) };',
    // appear from left
    back: '.enter-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all; -webkit-transform:translate3d(-100%,0,0)}  .enter-setup.enter-start {   position:absolute;   -webkit-transform:translate3d(0,0,0) }  .leave-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;  -webkit-transform:translate3d(0,0,0)} .leave-setup.leave-start {   position:absolute;  -webkit-transform:translate3d(100%,0,0) };'
  };
  $scope.direction = function(dir) {
  	$rootScope.style = styles[dir];
  };
  $scope.go = function(path) {
  	$location.path(path);
  }
  $scope.direction('front');
});
