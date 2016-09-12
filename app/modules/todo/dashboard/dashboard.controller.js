/**
 * Created by surendra on 25/8/16.
 */
'use strict';
(function () {
    angular.module('dashboard.controllers',[])
        .controller('DashboardController',DashboardController);
    DashboardController.$inject = ['$scope','taskService','$translate','$rootScope','$uibModal'];

    function DashboardController($scope,taskService,$translate,$rootScope,$uibModal) {
        console.log("In dashboard controller");

        var dc = this;
        dc.status;
        $rootScope.ALL_TASK=[]
        dc.filter_tasks=[];
        dc.dummyAllTasks=[]


        // code for i18n
        dc.changeLanguage =function(langCode) {
            console.log("selected language is"+langCode);
            $translate.use(langCode)

        }

        //code for get All task from json file
        taskService.readTasks().then(function (data) {
            $rootScope.ALL_TASK = data;
            dc.dummyAllTasks = angular.copy($rootScope.ALL_TASK)
        },function (err) {
            /*error code*/
        })



        /*
         * get statuses
         *
         * */
        dc.getStatuses = ['OPENED','INPROGRESS','INVALID','COMPLETED','REJECTED'];

        /*
         * get tasks with respective status by using function
         * */
        $scope.filterByStatues = function(status){
            $rootScope.ALL_TASK = taskService.getFilteredTasks(status,dc.dummyAllTasks,$rootScope.ALL_TASK)
        }

        /*
         * add new task modal
         * */
        $scope.addNewTask = function() {
            $uibModal.open({
                templateUrl:'/app/partials/add-new-task.html',
                controller: function($scope,$uibModalInstance,$rootScope) {
                    var addTaskCtrl = $scope;
                    addTaskCtrl.getStatusesInAddModal = ['OPENED','INPROGRESS','INVALID','COMPLETED','REJECTED'];

                    addTaskCtrl.saveTask = function(task) {
                        console.log(task);
                        $rootScope.ALL_TASK.push(task);
                        $uibModalInstance.close();
                        console.log($rootScope.ALL_TASK[$rootScope.ALL_TASK.length-1])

                    }
                    addTaskCtrl.closeModal = function () {
                        $uibModalInstance.close();
                    }
                }
            });

        }

    }

}());