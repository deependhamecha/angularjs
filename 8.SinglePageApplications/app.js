var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl : 'pages/main.html',
        controller : 'mainController'
    })
    .when('/second',{
        templateUrl : 'pages/second.html',
        controller : 'secondController'
    })
});

myApp.controller('mainController',function($scope){
   
//    window.addEventListener('hashchange',function(){
//    
//    console.log('hash changed! '+window.location.hash);
//    });
    
//    $log.info($location.path()); // hash method in angularjs
});

myApp.controller('secondController',function($scope){
   
    
});