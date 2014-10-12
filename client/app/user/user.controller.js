app.controller('UserCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/api/users/' + $routeParams.id).success(function(data){
		$scope.user = data;
	});
	$scope.pageClass = 'page-user';
}]);