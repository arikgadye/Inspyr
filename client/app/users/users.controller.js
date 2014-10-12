app.controller('UsersCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/api/users').success(function(users){
		$scope.users = parseUsersIntoArray(users, 5);
	});
	var parseUsersIntoArray = function(users, size) {
		var newArr = [];
		for (var i = 0; i < users.length; i += size){
			newArr.push(users.slice(i, i + size));
		}
		return newArr;
	}
	$scope.pageClass = "page-users";
}]);