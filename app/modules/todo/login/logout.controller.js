/**
 * Created by surendra on 3/10/16.
 */
'use strict';
(function() {
    angular.module('logout.controllers',[])
        .controller('LogoutController',LogoutController);
    LogoutController.$inject = ['$scope','loginService','$location','$window']

    function LogoutController($scope,loginService,$location,$window) {
        console.log("this is logout controller");
        //code for display pie chart by status
        $window.localStorage.clear();
        $location.path('/');
    }

}());