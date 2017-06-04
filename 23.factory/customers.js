// Another way of defnining a controller in angularjs

'use strict';

(function() {

    // Controller
    var customerController = function($scope) {

        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }; // doSort

    }; // customerController

//------------------------------------------------------------------------------
    // Factory 
    var customerFactory = function() {

        var customers = ['Tony', 'Thor', 'Bruce', 'Strange', 'Steve'];

        return {
            getCustomers : function() {
                return customers;
            }, // getCustomers

            getCustomer : function(index) {
                return customer[index];
            }, // getCustomer

            setCustomer(name, index) {
                if(index >= customers.length) {
                    return false;
                } else {
                    customers[index] = name;
                    return true;
                }
            } // setCustomer
        };
    }; // customerFactory

//------------------------------------------------------------------------------
    // Binding Factory to App
    angular.module('myApp').factory('customerFactory', customerFactory);

//------------------------------------------------------------------------------
    // Injecting a Factory - Not Used yet
    // var customerController = function($scope, customerFactory) {
    //     function init() {
    //         $scope.customers = customerFactory.getCustomers();
    //     }
    // };

    // Specify this if minification is used so that it considers string instead
    // of variable
    customerController.$inject = ['$scope'];

    angular.module('myApp').controller('customerController', customerController);

}());
