app
.factory('UserFactory', function($rootScope){
	var service = {};
	service.currentUser = null;
	service.setUser = function(user) {
		this.currentUser = user;
	}
	service.unset = function() {
		console.log('unsetting...')
		this.currentUser = null;
	}
	return service;
});