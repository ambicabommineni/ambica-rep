var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
     
    /*watch event to track the change of input value*/
    
    $scope.$watch('username', function(name) {
        $scope.username = name;
        $scope.nodata=false;
        var url1 = "https://api.github.com/users/" + name;
        var url2 = url1 + "/repos";
        //get request 
        $http.get(url1)
            .then(function(response) {
                $scope.data = response.data;
            },function(response){
                $scope.nodata=true;
            });
        $http.get(url2)
            .then(function(response) {
                $scope.repodata = response.data;
            },function(response){
                $scope.nodata=true;
            });


    });
});