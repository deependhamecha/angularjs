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
    .when('/second',{
        templateUrl : 'secondpage.html',
        controller : 'secondController'
    })
});

myApp.controller('homeController',function($scope,$log){
    
    $scope.name = 'Home';
    
    // $log is a singleton object...check console & click first/second u wil find all $log property
    $log.main = "Property from main";
    $log.log($log);
});

myApp.controller('firstController',function($scope,$log){
    
    $scope.name = 'First';
    $log.first = "Property from First";
    $log.log($log);
});

myApp.controller('secondController',function($scope,$log){
    
    $scope.name = 'Second';
    $log.second = "Property from Second";
    $log.log($log);
});