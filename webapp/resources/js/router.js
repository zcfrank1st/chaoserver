angular
    .module('appRoute', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: ''
            })
            .when('/demo', {
                templateUrl: ''
            })
            .otherwise({
                redirectTo : '/'
            });
    });