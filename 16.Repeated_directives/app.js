var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl : 'main.html',
        controller : 'mainController'
    })
    
});

myApp.controller('mainController',function($scope){
    
    $scope.people = [
	{    
        name : 'Deepen Dhamecha',
        qualification : 'IT Engineer'
    },
	{   
        name : 'Dilisha Dhamecha',
        qualification : 'Junior KG'
    },
	{
        name : 'Ravi Dhamecha',
        qualification : 'Fashion Designer'
    }];
    
    $scope.formattedName = function(person){     // function
      
        return person.name+' an '+person.qualification; 
    };
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
        
        replace: true,  // this will fully replace check console 12 & do it false & check
        
        // remember : if replace : false then restrict:'C' wont work, as it accepts as a simple comment
        
        scope: {

            personObject : "=",
			formattedNameFunction : "&" // for calling function
            
            // function
//            formattedNameFunction : "&"
        },
        compile: function(elem, attrs) {
            console.log('Compiling...');
            console.log(elem.html());

            return {

                pre: function(scope, elements, attrs) {
                    console.log('Pre Linking...');  
                    console.log(elements);

                },

                post: function(scope, elements, attrs) {
                    console.log('Post Linking...');   
                    console.log(elements);
                }
            }
        }
    }
});