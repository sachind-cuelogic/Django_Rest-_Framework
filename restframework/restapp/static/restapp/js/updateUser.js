
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

var myApp = angular.module('myApp', []);
myApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('//');
	$interpolateProvider.endSymbol('//');
});
myApp.controller('namesCtrl', function($scope, $http) {
	
	$scope.user = {};

	$scope.submitForm = function() {
		$http({
			method  : 'POST',
			url     : '/restapp/users/',
			data    : $scope.user, //forms user object

		  	headers : {
		 	   'X-CSRFToken': getCookie('csrftoken')
		 	 },
			contentType: "application/json" 
		})
		.success(function(data) {
			if (data.errors) {
				$scope.errorFname = data.errors.first_name;
				$scope.errorLname = data.errors.last_name;
				$scope.errorUsername = data.errors.username;
				$scope.errorEmail = data.errors.email;
			} else {
				$scope.message = data.message;
			}
		});
	};
}); 




