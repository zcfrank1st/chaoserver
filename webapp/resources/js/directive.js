angular
    .module('appDirect', [])
    .directive('datadpNavbar', function () {
        "use strict";
        return {
            restrict: 'AE',
            templateUrl: './resources/template/navbar.html'
        };
    });