    var myApp = angular.module('myApp',[]); // [] is dependencies.. like other services from angularjs.org like messages.. kind of like 'import' 

    myApp.controller('mainController',function($scope,$filter) { //'$' sign does nothing..$scope is an object & its name has $ sign with it..nothing special..$scope is available in view under ng-controller
        
        // $scope acts between view & controller
        
        // A directive is an instruction to angularjs to manipulate a piece of DOM. which javascript/jquery also does.
        
        // ng-app && ng-controller are directives
        
        // ng-model bounds particular element to the scope
        // $scope.handle = "";
        
        // filter with lowercase
        
        /*$scope.handle = "";
        $scope.lowercasehandle = function(){
            return $filter('lowercase')($scope.handle);
        };
        */
        
		//$scope.handle = ""; You dont need necessarily define handle variable in $scope for binding..and i dont know why?
		
        $scope.lowercasehandle = function(fn) {
            return $filter('lowercase')(fn);
        };
        
		/*$scope.handle1 = $scope.handle; CONFUSION */
        
    });