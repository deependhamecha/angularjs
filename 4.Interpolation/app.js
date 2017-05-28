var myApp = angular.module("myApp",[]);

myApp.controller("mainController",['$scope','$timeout',function(s,t) {
	//We use array because of Minimizers so that it wont convert Strings.
    
    s.name = "Deepen";
    
    //Interpolation is nothing but combining of two strings 'Hello' + 'World'
    
    // 3000 seconds later set name variable to 'Everybody'
    t(function(){
        
        s.name = "Everybody";
    },3000);
}]);