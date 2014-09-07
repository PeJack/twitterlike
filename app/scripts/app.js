'use strict';

/**
 * @ngdoc overview
 * @name opAppApp
 * @description
 * # opAppApp
 *
 * Main module of the application.
 */
var App = angular.module('opAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-websql',
    'ui.bootstrap',
    'firebase'
  ]);

App.user = null;
App.ref = null;
App.auth = null;

angular.element(document).ready(function () {
    App.ref = new Firebase("https://blinding-inferno-6677.firebaseio.com/");
    App.auth = new FirebaseSimpleLogin(App.ref, function (error, user) {
        App.user = user;
    });
});

var authentication = {
    app: function ($q, $location) {
        var deferred = $q.defer();

        if (App.user != null) {
            $location.path("/");
            deferred.resolve(App.user);
        } else {
            $location.path("/login");
            deferred.resolve(null);
        }
        return deferred.promise;
    }
}


 
  App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: authentication,
        title: 'Dashboard'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        title: 'Login'

      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        title: 'Registration'
      })  
      .otherwise({
        redirectTo: '/'
      });
  })

App.run(function($rootScope, $route) {
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    $rootScope.title = $route.current.title;
  })
})

/*  App.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
}); */
/*
  App.run(function($rootScope, $location, Auth) {
    $rootScope.isSignedUp = false;
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && isSignedUp == true) {
            $location.path("/login");
        }
    });
});
*/



