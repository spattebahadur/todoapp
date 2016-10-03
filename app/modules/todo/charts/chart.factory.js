/**
 * Created by surendra on 23/9/16.
 */
(function() {
    'use strict';
    angular
        .module('chart.taskChartService', [])
        .factory('chartService', chartService);
    chartService.$inject = ['$rootScope'];

    function chartService($rootScope) {
        console.log("init cgart service1");
        var prepareCharts = {
            getNumberOfInprogresTasks: getNumberOfInprogresTasks,
            getNumberOfOpenTasks: getNumberOfOpenTasks,
            getNumberOfCompletedTasks: getNumberOfCompletedTasks,
            getNumberOfInvalidTasks: getNumberOfInvalidTasks,
            getNumberOfRejectedTasks: getNumberOfRejectedTasks,
            getOpenStatusPriorityTasks:getOpenStatusPriorityTasks,
            getCompletedStatusPriorityTasks:getCompletedStatusPriorityTasks,
            getInvalidStatusPriorityTasks:getInvalidStatusPriorityTasks,
            getInprogressStatusPriorityTasks:getInprogressStatusPriorityTasks
        }
        return prepareCharts;

        function getNumberOfInprogresTasks() {
            console.log("chart for getNo.ofInprogressTasks")
            var totalInprogressTasks=0;
            angular.forEach($rootScope.ALL_TASK,function(task){
                if(task.status==='INPROGRESS'){
                    totalInprogressTasks=totalInprogressTasks+1;
                }
            })
            console.log("total inprogress"+totalInprogressTasks);
            return totalInprogressTasks;
        }

        function getNumberOfOpenTasks() {
            console.log("chart for getNo.ofOpenTasks")
            var totalOpenedTasks=0;
            angular.forEach($rootScope.ALL_TASK,function(task){
                if(task.status==='OPENED'){
                    totalOpenedTasks=totalOpenedTasks+1;
                }
            })
            return totalOpenedTasks;
        }

        function getNumberOfCompletedTasks() {
            console.log("chart for getNo.ofCompletedTasks")
            var totalCompletedTasks=0;
            angular.forEach($rootScope.ALL_TASK,function(task){
                if(task.status==='COMPLETED'){
                    totalCompletedTasks=totalCompletedTasks+1;
                }
            })
            return totalCompletedTasks;
        }

        function getNumberOfInvalidTasks() {
            console.log("chart for getNo.ofCompletedTasks")
            var totalInvalidTasks=0;
            angular.forEach($rootScope.ALL_TASK,function(task){
                if(task.status==='INVALID'){
                    totalInvalidTasks=totalInvalidTasks+1;
                }
            })
            return totalInvalidTasks;
        }
        function getNumberOfRejectedTasks() {
            console.log("chart for getNo.ofCompletedTasks")
            var totalRejectedTasks=0;
            angular.forEach($rootScope.ALL_TASK,function(task){
                if(task.status==='REJECTED'){
                    totalRejectedTasks=totalRejectedTasks+1;
                }
            })
            return totalRejectedTasks;
        }

        /*
         * get Opened status task with there priority
         * */
        function getOpenStatusPriorityTasks() {
            console.log("status Open with Low priority")
            var statusOpenWithLowPriority=0;
            var statusOpenWithMediumPriority=0;
            var statusOpenWithHighPriority=0;
            angular.forEach($rootScope.ALL_TASK,function (task) {
                if(task.status=="OPENED"){
                    if(task.priority=="LOW"){
                        statusOpenWithLowPriority = statusOpenWithLowPriority+1;
                    }else if(task.priority=="MEDIUM"){
                        statusOpenWithMediumPriority = statusOpenWithMediumPriority+1;
                    }else{
                        statusOpenWithHighPriority = statusOpenWithHighPriority+1;
                    }
                }
            })
            console.log("status open as Low"+statusOpenWithLowPriority+"Medium : "+statusOpenWithMediumPriority +"High : "+statusOpenWithHighPriority)
            return [statusOpenWithLowPriority,statusOpenWithMediumPriority,statusOpenWithHighPriority]
        }

        /*
         * get Completed tasks with their priority
         * */
        function getCompletedStatusPriorityTasks() {
            console.log("status completed with Low priority")
            var statusCompletedWithLowPriority=0;
            var statusCompletedWithMediumPriority=0;
            var statusCompletedWithHighPriority=0;
            angular.forEach($rootScope.ALL_TASK,function (task) {
                if(task.status=="COMPLETED"){
                    if(task.priority=="LOW"){
                        statusCompletedWithLowPriority = statusCompletedWithLowPriority+1;
                    }else if(task.priority=="MEDIUM"){
                        statusCompletedWithMediumPriority = statusCompletedWithMediumPriority+1;
                    }else if(task.priority=="HIGH"){
                        statusCompletedWithHighPriority = statusCompletedWithHighPriority+1;
                    }
                }
            })
            console.log("status Completed as Low "+statusCompletedWithLowPriority+" Medium  : "+statusCompletedWithMediumPriority +" High  : "+statusCompletedWithHighPriority)
            return [statusCompletedWithLowPriority,statusCompletedWithMediumPriority,statusCompletedWithHighPriority]
        }

        /*
         * get  Invalid tasks with their Priority
         * */

        function getInvalidStatusPriorityTasks() {
            console.log("status completed with Low priority")
            var statusInvalidWithLowPriority=0;
            var statusInvalidWithMediumPriority=0;
            var statusInvalidWithHighPriority=0;
            angular.forEach($rootScope.ALL_TASK,function (task) {
                if(task.status=="INVALID"){
                    if(task.priority=="LOW"){
                        statusInvalidWithLowPriority = statusInvalidWithLowPriority+1;
                    }else if(task.priority=="MEDIUM"){
                        statusInvalidWithMediumPriority = statusInvalidWithMediumPriority+1;
                    }else if(task.priority=="HIGH"){
                        statusInvalidWithHighPriority = statusInvalidWithHighPriority+1;
                    }
                }
            })
            console.log("status Invalid as Low "+statusInvalidWithLowPriority+" Medium : "+statusInvalidWithMediumPriority +" High : "+statusInvalidWithHighPriority)
            return [statusInvalidWithLowPriority,statusInvalidWithMediumPriority,statusInvalidWithHighPriority]
        }

        /*
         * get Inprogress status
         * */
        function getInprogressStatusPriorityTasks() {
            console.log("status completed with Low priority")
            var statusInprogressWithLowPriority=0;
            var statusInprogressWithMediumPriority=0;
            var statusInprogressWithHighPriority=0;
            angular.forEach($rootScope.ALL_TASK,function (task) {
                if(task.status=="INPROGRESS"){
                    if(task.priority=="LOW"){
                        statusInprogressWithLowPriority = statusInprogressWithLowPriority+1;
                    }else if(task.priority=="MEDIUM"){
                        statusInprogressWithMediumPriority = statusInprogressWithMediumPriority+1;
                    }else if(task.priority=="HIGH"){
                        statusInprogressWithHighPriority = statusInprogressWithHighPriority+1;
                    }
                }
            })
            console.log("status inprogress as Low "+statusInprogressWithLowPriority+" Medium : "+statusInprogressWithMediumPriority +" High : "+statusInprogressWithHighPriority)
            return [statusInprogressWithLowPriority,statusInprogressWithMediumPriority,statusInprogressWithHighPriority]
        }
    }
}
());