    var myApp = angular.module('myApp',['ngMessages']); // [] is dependencies.. like other services from angularjs.org like messages.. kind of like 'import' 

    myApp.controller('mainController',function($scope,$log, $filter){ //'$' sign does nothing..$scope is an object & its name has $ sign with it..nothing special..$scope is available in view under ng-controller
        
        // $scope acts between view & controller
        $scope.fistname="Deepen";
        $scope.lastname="Dhamecha";
        console.log($scope);
        
        $log.log("Hello");
        $log.debug("Debug information");
        $log.error("Error Information");
        $log.info("Information");
        $log.warn("Warning information");
        
		var searchPeople = function(firstname,lastname){ return "Ohky Mate!" };
		console.log("::"+searchPeople.toString());
		// Dependency Injection inside Angular
		console.log(angular.injector().annotate(searchPeople)); // This method takes your parameters and converts it into an array and passes on to other functions when needed as dependency injection.
        
        var name = "deepen";
        $scope.name1 = "dhamecha";
        
		
        name = $filter('uppercase')(name);
        $scope.name1 = $filter('uppercase')($scope.name1);
        
        console.log(name);
        console.log($scope.name1);
    });