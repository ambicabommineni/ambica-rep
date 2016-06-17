/**
 * Created by ambica on 6/16/16.
 */
var app = angular.module('myApp', ['mySvcModule']);

app.controller('myCtrl', function($scope, $http, mySvc) {

    /*watch event to track the change of input value*/

    $scope.$watch('username', function(name) {
        $scope.username = name;
        $scope.nodata = false;
        //get request

        mySvc.getUsers(name).then(function(response) {
            $scope.data = response.data;
        }, function(response) {
            $scope.nodata = true;
        });
        mySvc.getRepo(name).then(function(response) {
            $scope.repodata = response.data;
        }, function(response) {
            $scope.nodata = true;
        });


    });
});