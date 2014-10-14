app.
directive('agUser', ['UserFactory', '$rootScope', function(UserFactory, $rootScope){
	return {
		restrict: 'EA',
		transclude: true,
		templateUrl: '/app/directives/userDirective.html',
		link: function(scope, element, attrs) {
			element.find('img').on('mouseenter', function(){
				scope.hovered = true;
				scope.$apply();
			}).on('mouseleave', function(){
				scope.hovered = false;
				scope.$apply();
			});
		}
	};
}]);