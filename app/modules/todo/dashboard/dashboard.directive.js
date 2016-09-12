/**
 * Created by surendra on 1/9/16.
 */
'use strict';
(function(){
    angular.module('dashboard.tasks.directive',[])
        .directive('allTasksDirective',function () {
            return{
                restrict:'E',
                templateUrl :"/app/partials/all-tasks.html"
            };
        })
    
}());