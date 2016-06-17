/**
 * Created by ambica on 6/16/16.
 */
angular.module('mySvcModule',[]).
    constant("myURLs" , {
    "userURL" : "https://api.github.com/users/"

    //creating the factory 

}).factory('mySvc', function ($http,myURLs) {
        return{
            getUsers : function (user) {
                return $http.get (
                    myURLs.userURL + user
                );
            },
            getRepo : function (user) {
                return $http.get(
                    myURLs.userURL + user + "/repos"
                )
            }
        }
});