angular
  .module('appCtrl', [])
  .controller('myController', function ($scope, $http) {
    $scope.clickdemo = function () {
      $http({
        method: 'GET',
        url: '/me'
      }).
      success(function (data, status, headers, config) {
        alert(data);
      }).
      error(function (data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };
  });