app.
directive('agUserinfo', ['UserFactory', '$rootScope', function(UserFactory, $rootScope){
	return {
		restrict: 'EA',
		templateUrl: '/app/directives/userInfoDirective.html',
		controller: function($scope){
			$scope.$on("show:user", function(e, args){
				$scope.currentUser = args;
				$scope.$apply();
			});
		}
	}
}]);