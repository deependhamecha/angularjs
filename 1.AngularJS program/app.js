var myApp = angular.module('mainApp',[]);

// ng-app in DOM will relate to 'mainApp' & we will use 'myApp' variable so that we wont pollute global namespace as everything will be under 'myApp' variable

myApp.controller('mainController',function() { // This is controller for the VIEW
        console.log('Deepen Dhamecha');
});