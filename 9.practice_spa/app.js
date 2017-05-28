var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider) {

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

myApp.controller('homeController',function($scope){

    $scope.name = 'Home';
});

myApp.controller('firstController',function($scope){

    $scope.name = 'First';
});

myApp.controller('secondController',function($scope){

    // console.log('coming');
    $scope.name = 'Second';
});
