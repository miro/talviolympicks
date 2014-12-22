'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('talviolympicksApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('landing', {
        url: '/',
        templateUrl: 'partials/landing.html'
    });
});
