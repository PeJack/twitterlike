'use strict';

/**
 * @ngdoc function
 * @name opAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the opAppApp
 */

App.controller('MainCtrl', function($scope, $webSql, $filter, $location, Auth) {

		$scope.db = $webSql.openDatabase ('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
		
		$scope.db.selectAll("messages").then(function(results) {
			$scope.messages = [];
			for(var i = 0; i < results.rows.length; i++) {
				$scope.messages.push(angular.copy(results.rows.item(i)));
			}
		});

	$scope.orderProp = '-id';

	$scope.$on('$firebaseSimpleLogin:logout', function() {
		$location.path('/login');
	});

	$scope.logout = function() {
		Auth.logout();
	}



	$scope.newMessage = function() {
		if($scope.message) {
			$scope.db.insert("messages", {"msg":$scope.message}).then(function(results){
			console.log(results.insertId);
 		})
 	$scope.db.selectAll("messages").then(function(results) {
  		$scope.messages = [];
  		for(var i=0; i < results.rows.length; i++) {
  			$scope.messages.push(angular.copy(results.rows.item(i)));
  		}
  	})
  	$scope.message = '';
 		}
	};

	$scope.delMessage = function(message) {
		$scope.db.del("messages", {"id":message.id});
		$scope.messages.splice($scope.messages.indexOf(message), 1)
	};


	$scope.dislikeMsg = function(message) {
		var pos = $scope.messages.indexOf(message);
		if ($scope.messages[pos].disliked === 'false') {
		$scope.messages[pos].disliked = 'true'
		$scope.db.update("messages", {"disliked": true}, {"id": $scope.messages[pos].id});
		} else if ($scope.messages[pos].disliked === 'true') {
		$scope.messages[pos].disliked = 'false'
		$scope.db.update("messages", {"disliked": false}, {"id": $scope.messages[pos].id});
		}
	}
	});

