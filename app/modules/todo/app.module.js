/**
 * Created by surendra on 25/8/16.
 */
'use strict';
// Declare app level module which depends on views, and components
(function () {
    angular.module('myApps', [
        'ui.router',
        'ui.bootstrap',
        '720kb.tooltips',
        '720kb.datepicker',
        'chart.js',
        'ngSanitize',
        'ui.select',
        'ngCookies',
        'login.controllers',
        'logout.controllers',
        'login.service',
        'dashboard.filter',
        'dashboard.controllers',
        'dashboard.taskService',
        'dashboard.tasks.directive',
        'dashboard.single.task.directive',
        'chart.taskChartService',
        'chart.controllers',
        'pascalprecht.translate'
    ]);
}());
