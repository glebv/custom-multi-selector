'use strict';

var mod = angular.module('cs.comp', []);
  mod.directive('csMultiSelector', function ($compile) {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: './components/multi-selector/selector.html',
      controller: 'MultiSelectorCtrl',
      scope: {
        rows: '=data'
      },
      link: function(scope) {
        var head = angular.element(document.getElementsByTagName('head')[0]);
        var html = '<link rel="stylesheet" ng-href="./components/multi-selector/selector.css" />';
        head.append($compile(html)(scope));
      }
    };
  })
  .controller('MultiSelectorCtrl', function($scope) {
    $scope.data = {
      totalSelected: 0,
      selectAll: function() {
        angular.forEach(this.rows, function(item) {
          item.assigned = true;
        });
        this.totalSelected = this.rows.length;
      },
      deselectAll: function() {
        angular.forEach(this.rows, function(item) {
          item.assigned = false;
        });
        this.totalSelected = 0;
      },
      assign: function(index) {
        var element = this.rows[index];
        element.assigned = ! element.assigned;
        return element.assigned ? this.totalSelected++ : this.totalSelected--;
      },
      rows: $scope.rows
    };

  });



