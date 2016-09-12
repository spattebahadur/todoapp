/**
 * Created by surendra on 25/8/16.
 */
(function() {
    'use strict';
    angular
        .module('myApps')
        .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$translateProvider'];
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {

        // use the HTML5 History API
        $locationProvider.html5Mode(true);

     /*   $stateProvider.state('dashboard', {
            url:'/dashboard',
            templateUrl: '/app/partials/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dc'
        });

        //if no url, redirect to home page
        $urlRouterProvider.otherwise('/dashboard');*/


        $stateProvider.state('dashboard', {
            url: '/',
            templateUrl: '/app/partials/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dc'
        }).state('notavailable', {
            url:'/notavailable',
            templateUrl: '/app/partials/page-not-found.html'
        });

        $urlRouterProvider.otherwise('/notavailable');


        // configures staticFilesLoader
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/messages-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.forceAsyncReload(true);

    }
}());

