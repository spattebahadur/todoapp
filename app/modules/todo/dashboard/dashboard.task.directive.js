/**
 * Created by surendra on 1/9/16.
 */
'use strict';
(function(){
    angular.module('dashboard.single.task.directive',[])
        .directive('singleTaskDirective',function () {
            return{
                restrict:'AE',
                scope:{
                    task:'=taskObj'
                },
                templateUrl :"/app/partials/single-task.html",
                controller:function($scope,taskService,$uibModal) {
                    $scope.removeTaskDir=function(task) {
                        $uibModal.open({
                            templateUrl: '/app/partials/delete-task-modal-template.html',
                            controller:function ($scope,taskService,$rootScope,$uibModalInstance) {
                                $scope.deleteTaskDir = function () {
                                    $rootScope.ALL_TASK = taskService.deleteTask(task)
                                    $uibModalInstance.close();
                                };
                                $scope.cancelDelete=function () {
                                    $uibModalInstance.close();
                                }
                            }
                        });
                    };
                    $scope.changeTaskStatusAsComplete = function(taskItem){
                        console.log("change task status");
                        taskService.markTaskAsCompleted(taskItem);
                    }
                },
                link: function(scope, element, attrs) {
                    element.on('mouseenter', function() {
                       // scope.hoverEdit == !scope.hoverEdit
                        element.addClass("mouse-over");
                    });

                    element.on('mouseleave', function() {
                        //scope.hoverEdit == !scope.hoverEdit
                        element.removeClass("mouse-over");
                    });
                }
            };
        })
}());