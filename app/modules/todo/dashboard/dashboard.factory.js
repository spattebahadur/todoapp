/**
 * Created by surendra on 25/8/16.
 */

(function(){
    'use strict';
    angular
        .module('dashboard.taskService',[])
        .factory('taskService', taskService);
    taskService.$inject = ['$http','$filter','$q','$uibModal','$rootScope'];
    function taskService($http,$filter,$q,$uibModal,$rootScope) {
        var service = {
            readTasks: readTasks,
            deleteTask:deleteTask,
            markTaskAsCompleted:markTaskAsCompleted
        };
        console.log()
        return service;

        function readTasks() {
            console.log("readTask");
            var mainData = null;
            var d = $q.defer();
            $http.get('app/json/tasks.json')
                .then(function (res) {
                    var data = res.data;
                    d.resolve(data)
                },function (err) {
                    /*error code*/
                })
            return d.promise;
        }

        /*
         * delete tasks
         *
         * */

        function deleteTask(taskItem){
            console.log("dummy tasks--------"+$rootScope.ALL_TASK[0].name)
            console.log("inside remove task" + taskItem.name)
            var index = $rootScope.ALL_TASK.indexOf(taskItem);
            console.log("index is"+index);
            $rootScope.ALL_TASK.splice(index, 1);
            return $rootScope.ALL_TASK;
        }

        /*
        * Mark task as completed
        * */
        
        function markTaskAsCompleted(taskItem) {
            console.log("service mark as completed");
            taskItem.status="COMPLETED";
            
        }
    }
}());
