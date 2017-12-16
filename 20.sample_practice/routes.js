myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            template : 'Welcome Home'
        })
        .when('/name', {
            templateUrl : 'components/name/nameView.html',
            controller  : resolveController('/components/name/nameController.js')
        })
        .when('/marks', {
            templateUrl : 'components/marks/marksView.html',
            controller  : resolveController('/components/marks/marksController.js')
        })

        // try route.resolve
});