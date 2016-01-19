var myApp  = angular.module("myApp",[]);
myApp.controller("mainController",function($scope,$filter,$http,$timeout){
    
    $scope.handle="";
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
	$scope.arr = ['Deepen','Dilisha','Ravi'];
    
    
    // simple ajax request
//    var rulesrequest = new XMLHttpRequest();
//    rulesrequest.onreadystatechange = function(){
//        $timeout(function(){
//        if(rulesrequest.readyState == 4 && rulesrequest.status == 200){
//            $scope.rules = JSON.parse(rulesrequest.responseText);
//        }
//        });
//        console.log($scope.rules);
//    }
//    
//    rulesrequest.open("GET","json1.json",true);
//    rulesrequest.send();
//    
    
    // ajax GET request using $http
    
    $http.get('json1.json')
        .success(function(result){
        
        $scope.rules = result;
    })
        .error(function(data,status){
        
            console.log(data+' '+status);
    });
    
    // ajax POST request using $http
    
    $scope.newRule='';
    $scope.addRule = function(){
        
        $http.post('json1.json',{ newRule : $scope.newRule })
            .success(function(result){
                $scope.rules = result;
                $scope.newRule = '';
        })
            .error(function(data,status){
                console.log(data);
        });
    };
        
});