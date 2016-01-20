var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl : 'main.html',
        controller : 'mainController'
    })
    
});

myApp.controller('mainController',function($scope){
    
    $scope.person = {
        
        name : 'Deepen Naresh Dhamecha',
        qualification : 'IT Engineer'
    };
    
    $scope.formattedName = function(person){     // function
      
        return person.name+' an '+person.qualification; 
    };
});

myApp.controller('secondController',function($scope){
    
    
});

myApp.directive("searchResult",function(){
    
    return { 
        restrict : 'AEMC', 
        templateUrl : 'search-result.html',
        replace: true,  

        scope: { 
            personName : "@",
			qualification : "@"
        }
    }
});