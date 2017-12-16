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
//    .when('/second',{
//        templateUrl : 'secondpage.html',
//        controller : 'secondController'
//    })
});
// Our service
myApp.service('nameService',function() {
    var self = this;
    this.name = 'Deepen';
    this.namelength = function(){
        return self.name.length;
    };
});

myApp.controller('homeController',function($scope,$log,nameService) {

//   $scope.name = 'Home';
//    $log.log(nameService.name);
//    console.log(nameService.namelength());

    $scope.name = nameService.name;

    $scope.$watch('name',function(oldValue,newValue){
        nameService.name = $scope.name;
        console.log(oldValue+' '+newValue);

    });


//    console.log("Home : "+nameService.name);

//    nameService.name = document.getElementById('inp').value;
});

myApp.controller('firstController',function($scope,$log,nameService){

    //$scope.name = 'First';

//    nameService.name = document.getElementById('inp').value;

    $scope.name = nameService.name;

    $scope.$watch('name',function(oldValue,newValue){
        nameService.name = $scope.name;
        console.log(oldValue+' '+newValue);

    });

//    console.log("Second Controller : "+nameService.name);

});

//myApp.controller('secondController',function($scope,$log){
//
//    $scope.name = 'Second';
//    $log.second = "Property from Second";
//    $log.log($log);
//});
