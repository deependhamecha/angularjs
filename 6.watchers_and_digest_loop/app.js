var myApp = angular.module("myApp",[])

myApp.controller("mainController",function($scope,$filter,$timeout) {

    var kp = document.getElementById("jsevent");
        kp.addEventListener("keypress",function(event){
        console.log("Key Pressed");
    });


    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    // watchlist & digest loop tracks the variables & you can manually do it using below code
    // it also checks with HTML DOM
    $scope.$watch('handle',function(oldValue, newValue) {

        console.info('Changed!');
        console.log(oldValue);
        console.log(newValue);
    });




//     this did not update bcoz its javascript (Outside of AngularJS context) & thats it wasnt executed or tracked by angularjs digest loop && dont do it
    setTimeout(function() {
		$scope.handle = 'Deepen Dhamecha';
        console.log($scope.handle);
    },3000);


    // So whenever u r using Javascript context inside Angularjs then u want to put it in digest loop to keep track of it by putting it in $apply()
    setTimeout(function() {
        $scope.$apply(function(){
            $scope.handle = "Hello World";
            console.log($scope.handle);
        });
    },5000);

    // or u can do it directly by using $timeout service of angularjs
    $timeout(function() {
        $scope.handle = 'inside scope';
        console.log($scope.handle);
    }, 10000);

});
