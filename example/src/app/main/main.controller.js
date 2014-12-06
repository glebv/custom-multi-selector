'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope, Contractors) {
    $scope.data = [];
    Contractors.then(
      function(res) {
        $scope.data = res;
      }
    );
  });
