var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope) {

    $scope.persons = [
        {
            name: 'Tony Stark',
            profession : 'Iron Man'
        },
        {
            name: 'Steve Rogers',
            profession : 'Captain America'
        },
        {
            name: 'Bruce Banner',
            profession : 'Hulk'
        },
        {
            name: 'Stephen Strange',
            profession : 'Doctor Strange'
        },
        {
            name : 'Logan',
            profession : "Wolverine"
        },
        {
            name : 'Thor',
            profession : 'King of Asgard'
        }
    ];
}]);