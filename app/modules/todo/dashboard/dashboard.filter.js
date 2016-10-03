/**
 * Created by surendra on 27/9/16.
 */
(function() {
    'use strict';
    angular
        .module('dashboard.filter',[])
        .filter('dashboardFilter', dashboardFilter);
    dashboardFilter.$inject = ['$filter'];
    function dashboardFilter($filter) {
        //code
        return function (taskList,prioritiesObj) {
            var multiPriorities=[];
            console.log("length is :");
            angular.forEach(taskList,function (task) {
                if(angular.isUndefined(prioritiesObj.priority)){
                    console.log("yes @@@@@@@@ :");
                    return taskList;
                }else{
                    for(var i=0;i<prioritiesObj.priority.length;i++){
                        console.log("filter data loop " + prioritiesObj.priority[i])
                        if(prioritiesObj.priority[i]===task.priority){
                            multiPriorities.push(task);
                        }
                    }
                }
            });
            if(prioritiesObj.priority==undefined || typeof prioritiesObj.priority[0] === 'undefined'){
                return taskList;
            }
            return multiPriorities;
        }
    }

}());

