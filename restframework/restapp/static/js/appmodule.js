  var myApp = angular.module('myApp', []);

  myApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
  });


  myApp.controller('namesCtrl', function($scope) {  
    $scope.names = [  
'Ramesh',  
'Pooja',  
'Mahesh',  
'Ramanujam',  
'Osama',  
'Iqbal',  
'Karl',  
'Johnson',  
'Alex'  
    ];  
}); 