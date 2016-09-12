/**
 * Created by surendra on 25/8/16.
 */
'use strict';
// Declare app level module which depends on views, and components
(function () {
    angular.module('myApps', [
        'ui.router',
        'ui.bootstrap',
        'dashboard.controllers',
        'dashboard.taskService',
        'dashboard.tasks.directive',
        'dashboard.single.task.directive',
        'pascalprecht.translate'
    ]);
}());
