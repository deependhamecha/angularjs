var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl : 'home.html',
        controller : 'homeController'
    })
    .when('/first',{
        templateUrl : 'firstpage.html',
        controller : 'firstController'
    })
    .when('/first/:num',{
        templateUrl : 'firstpage.html',
        controller : 'firstController'
    })
});

myApp.controller('homeController',function($scope){
    
    $scope.name = 'Home';
});

myApp.controller('firstController',function($scope,$routeParams){
    
    $scope.name = "First";
    $scope.num = $routeParams.num;
});

//myApp.controller('secondController',function($scope){
//    
//    $scope.name = 'Second';
//});