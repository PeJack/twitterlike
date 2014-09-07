'use strict';
 
App.factory('Auth', function($firebaseSimpleLogin, $rootScope) {
	var ref = new Firebase("https://blinding-inferno-6677.firebaseio.com/");
	var auth = $firebaseSimpleLogin(ref);



	var Auth = {
		signedIn: function() {
			return auth.user !== null
		},

		register: function (user) {
			return auth.$createUser(user.email, user.password);
		},
		login: function(user) {
			return auth.$login('password', user);
		},
		logout: function() {
			auth.$logout();
		}
	};

	$rootScope.signedIn = function() {
		return	Auth.signedIn();
	};

	return Auth;
})