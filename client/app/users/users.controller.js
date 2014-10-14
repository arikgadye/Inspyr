app.controller('UsersCtrl', ['$scope', '$http', '$rootScope', 'UserFactory', function($scope, $http, $rootScope, UserFactory){
	$http.get('/api/users').success(function(users){
		$scope.users = parseUsersIntoArray(users, 7);
		console.log($scope.users)
	});
	var parseUsersIntoArray = function(users, size) {
		var newArr = [];
		for (var i = 0; i < users.length; i += size){
			newArr.push(users.slice(i, i + size));
		}
		return newArr;
	}
	$scope.currentUser = null
}]);