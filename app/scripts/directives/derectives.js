App.factory('titleChange', function($routeScope, $location) {
	$routeScope.$on ("$routeChangeStart", function(event, nextRoute, currentRoute) {
		switch($location.path()) {
			case '/':
				return 'Dashboard';
		}
	})

})