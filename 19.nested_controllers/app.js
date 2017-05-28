var myApp = angular.module('myApp', []);

myApp.controller('parentController', function($scope) {
    
    $scope.message = 'Parent Controller';

    $scope.parentShare = {}
    $scope.parentShare.name = 'Yes Parent';
});

myApp.controller('childController', function() {
    

    // $scope.message = 'Child Controller';


/*  Okay,this is good but what if you want to access parent $scope property?
*   You can do so by using $parent. See `index.html`.
*   But this $parent variable even gets messy when more nested controllers
*   come into picture.
*
*   Solution 1 : Create a property in scope which you want to share.
*/

    // $scope.childShare = {};


/*  Now insert properties to it which you want to share.
*/

    // $scope.childShare.name = 'Yes Child';



/*----------------------------------------------------------------------------*/

/*  Second approach is add alias to controller using as in View but you 
*   need to remove scope.
*/

    this.name = 'Child Controller';

/*  Two way binding can only be achieved with `as aliasName`
*   Just put it in `ng-model` and check
*/


});

myApp.controller('nestedChildController', function() {

});