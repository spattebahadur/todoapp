/**
 * Created by surendra on 3/10/16.
 */
'use strict';
(function() {
    angular.module('login.controllers',[])
        .controller('LoginController',LoginController);
    LoginController.$inject = ['$scope','loginService','$location','$cookies']

    function LoginController($scope,loginService,$location,$cookies) {
        console.log("this is login controller");
        //code for display pie chart by status
        $scope.login = function(user) {
            console.log("this is login function");
            var success = loginService.getLogin(user);
            if(success.isAdmin) {
                $cookies.put("hasAdmin",true)
                $location.path('/dashboard');
            }else if(success.isGuest){
                $cookies.put("hasAdmin",false)
                $location.path('/dashboard');
            }else{
                $scope.errorMsg = true;
            }
        }

    }

}());