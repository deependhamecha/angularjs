var myApp1 = angular.module('mainApp1', []);

// If your code is minified then use an array instead of function directly
myApp1.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $log.info($scope);
}]);