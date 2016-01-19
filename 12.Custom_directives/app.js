var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl : 'main.html',
        controller : 'mainController'
    })
    .when('/second',{
        templateUrl : 'second.html',
        controller : 'secondController'
    })
});

myApp.controller('mainController',function($scope){

});

myApp.controller('secondController',function($scope){
    
    
});

myApp.directive("searchResult",function(){
    
    
    return { 
        restrict : 'AEMC', // A=attribute, E= Element, C=Class, M=Comment
        //actual directive ...THIS WILL INSERT INTO <search-result> directive
//        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Deepen Dhamecha</h4><p class="list-group-item-text">IT Engineer</p></a>',
        // Now, this html string can be pretty ugly at times so save it to another file & give path
        templateUrl : 'directives/search-result.html', //u can name directives folder as u want, nothing personal
        
        replace: true   // this will fully replace check console 12 & do it false & check
        
        // remember : if replace : false then restrict:'C' wont work, as it accepts as a simple comment
    }
});