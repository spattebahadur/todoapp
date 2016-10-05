/**
 * Created by surendra on 25/8/16.
 */
'use strict';
(function () {
    angular.module('dashboard.controllers',[])
        .controller('DashboardController',DashboardController);
    DashboardController.$inject = ['$scope','taskService','$translate','$rootScope','$uibModal','$window','$location','$cookies'];

    function DashboardController($scope,taskService,$translate,$rootScope,$uibModal,$window,$location,$cookies) {
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
        dc.getStatuses = ['ALL','OPENED','INPROGRESS','INVALID','COMPLETED','REJECTED'];
        dc.selectStatus = dc.getStatuses[0];

        /*
        * get priorities
        * */
        dc.getPriorities = ['LOW','MEDIUM','HIGH'];

        /*
         * get tasks with respective status by using function
         * */
        $scope.filterByStatues = function(status){
            $rootScope.ALL_TASK = taskService.getFilteredTasks(status,dc.dummyAllTasks,$rootScope.ALL_TASK)
        }

        //test filter data
        dc.getPriorityArray = function(priorityArray) {
            var multiPriority = [];
            console.log("dashboard check priority")
            angular.forEach(priorityArray,function (priority) {
                multiPriority.push(priority)
            });
            console.log("dashboard check priority"+multiPriority);
            return multiPriority;
        }

        dc.isAdmin=$cookies.get('hasAdmin');
        console.log("Admin");
        console.log(dc.isAdmin)
        /*
         * add new task modal
         * */
        $scope.addNewTask = function() {
            $uibModal.open({
                templateUrl:'/app/partials/add-new-task.html',
                controller: function($scope,$uibModalInstance,$rootScope,taskService) {
                    var addTaskCtrl = $scope;
                    getPrevDate();
                    addTaskCtrl.getStatusesInAddModal = ['OPENED','INPROGRESS','INVALID','COMPLETED','REJECTED'];

                    addTaskCtrl.saveTask = function(task,isValidForm) {
                        addTaskCtrl.isMadatoryFieldSelected = false;
                        console.log(task);
                        if(isValidForm) {
                            var taskListLastindex = $rootScope.ALL_TASK.length+1;
                            task.name="Task "+taskListLastindex;

                            $rootScope.ALL_TASK.push(task);
                            $uibModalInstance.close();
                            console.log($rootScope.ALL_TASK[$rootScope.ALL_TASK.length - 1])
                        }else{
                            addTaskCtrl.isMadatoryFieldSelected =true;
                        }
                    }
                    addTaskCtrl.closeModal = function () {
                        $uibModalInstance.close();
                    }

                  function getPrevDate() {
                      var myDate = new Date();
                      var previousDay = new Date(myDate);
                      previousDay.setDate(myDate.getDate()-1);
                      addTaskCtrl.minDate = previousDay.toString();
                   }

                }
            });

        }

    }

}());