app.
directive('agUser', ['UserFactory', '$rootScope', function(UserFactory, $rootScope){
	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: '/app/directives/userDirective.html',
		controller: function($scope, $rootScope){
			$scope.showUser = function(user){
			}
		},
		link: function(scope, element, attrs) {
			element.find('img').on('mouseenter', function(){
				$rootScope.$broadcast('show:user', scope.user)
			}).on('mouseleave', function(){
				scope.currentUser = null;
			});
		}
	};
}]);