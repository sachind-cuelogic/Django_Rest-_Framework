var myApp = angular.module('myApp', []);

/*	*/

myApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('//');
	$interpolateProvider.endSymbol('//');
});


myApp.controller('namesCtrl', function($scope, $http) {
	$scope.mydata = [];

	$http.get('/restapp/users/').then(function(response){
		console.log(response);
		$scope.mydata = response.data;

	});

	var technologies = [
	{name:"C#", likes:0, dislike:0},
	{name:"Java", likes:0, dislike:0},
	{name:"Django", likes:0, dislike:0},
	{name:"HTML", likes:0, dislike:0},
	{name:"AngularJS", likes:0, dislike:0},
	];
	$scope.technologies = technologies;
	$scope.increamentLikes = function(technology){
		technology.likes++;
	}
	$scope.increamentDislikes = function(technology){
	technology.dislike++;
	}
	$scope.rowlimit=3;
	$scope.sortColumn = "name";
	$scope.reverseSort = false;
	$scope.sortData = function(column){
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}
	$scope.getSortClass = function(column){
		if($scope.sortColumn == column){
			return $scope.reverseSort ? '.arrow-down' : '.arrow-up';	
		}
		return '';

	}

}); 




