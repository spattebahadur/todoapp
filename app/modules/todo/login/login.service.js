/**
 * Created by surendra on 3/10/16.
 */
'use strict';
(function() {
    angular.module('login.service',[])
        .factory('loginService',loginService);
    //loginService.$inject = ['$scope']

    function loginService() {
        console.log("this is login service");
        //code for display pie chart by status
        var loginService = {
            getLogin:getLogin
        };
        return loginService;
        function getLogin(user) {
            console.log("login service")
            var success={};
            success.isAdmin = false;
            success.isGuest = false;
            if(user.username==='admin' && user.password==='admin'){
                success.isAdmin = true;
                return success;
            }else if(user.username==='guest' && user.password==='guest'){
                success.isGuest = true;
                return success;
            }
            return success;
        }
    }

}());