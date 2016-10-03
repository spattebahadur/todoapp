/**
 * Created by surendra on 23/9/16.
 */
'use strict';
(function() {
    angular.module('chart.controllers',[])
        .controller('ChartController',ChartController);
    ChartController.$inject = ['$scope','chartService']

    function ChartController($scope,chartService) {
        console.log("this is chart controller");
        //code for display pie chart by status
        $scope.labels = ["InprogressTasks", "Opened", "Completed","Invalid","Rejected"];
        $scope.seriesFortaskByStatus =["tasks"]
        $scope.totalInprogressTasks = chartService.getNumberOfInprogresTasks();
        $scope.totalOpenedTasks = chartService.getNumberOfOpenTasks();
        $scope.totalCompletedTasks = chartService.getNumberOfCompletedTasks();
        $scope.totalInvalidTasks = chartService.getNumberOfInvalidTasks();
        $scope.totalRejectedTasks = chartService.getNumberOfRejectedTasks();
        $scope.data = [$scope.totalInprogressTasks, $scope.totalOpenedTasks, $scope.totalCompletedTasks,$scope.totalInvalidTasks,$scope.totalRejectedTasks];

        /*
         *Implement pie chart for tasks. Prepare data based on priorities
         * */
        $scope.statusOpenWithPriorityLabel = ["LOW","MEDIUM","HIGH"]
        $scope.statusOpenWithPriorityData = chartService.getOpenStatusPriorityTasks();

        $scope.statusCompletedWithPriorityData = chartService.getCompletedStatusPriorityTasks();

        $scope.statusInvalidWithPriorityData = chartService.getInvalidStatusPriorityTasks();

        $scope.statusInprogressWithPriorityData = chartService.getInprogressStatusPriorityTasks();


        // get more scenario
        $scope.statusWithPriorityLineLabel = ['Opened','Inprogress','Invalid','Completed'];
        $scope.statusWithPriorityLineSeries = ['LOW','MEDIUM','HIGH'];
        $scope.colorForstatusWithPriorityLine=['#00ccff','#c7a0d2','#e54687'];
        $scope.optionForstatusWithPriorityLine={
            options:{
                responsive:true,
                legend:{
                    display:true,
                    position: 'bottom'
                }
            }
        };
        $scope.statusWithPriorityLineData = [
            [$scope.statusOpenWithPriorityData[0],$scope.statusInprogressWithPriorityData[0],$scope.statusInvalidWithPriorityData[0],$scope.statusCompletedWithPriorityData[0]],
            [$scope.statusOpenWithPriorityData[1],$scope.statusInprogressWithPriorityData[1],$scope.statusInvalidWithPriorityData[1],$scope.statusCompletedWithPriorityData[1]],
            [$scope.statusOpenWithPriorityData[2],$scope.statusInprogressWithPriorityData[2],$scope.statusInvalidWithPriorityData[2],$scope.statusCompletedWithPriorityData[2]]
        ];
    }

}());