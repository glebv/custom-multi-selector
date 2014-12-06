'use strict';

var mod = angular.module('app.comp', []);
  mod.directive('appMultiSelector', function ($compile) {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: './components/multi-selector/selector.html',
      controller: 'MultiSelectorCtrl',
      scope: {},
      link: function(scope, elem) {
        var head = angular.element(document.getElementsByTagName('head')[0]);
        var html = '<link rel="stylesheet" ng-href="./components/multi-selector/selector.css" />';
        head.append($compile(html)(scope));
      }
    };
  })
  .controller('MultiSelectorCtrl', function($scope, Contractors) {
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
        element.assigned ? this.totalSelected++ : this.totalSelected--;
      },
      rows: []
    };

    Contractors.then(
      function(res) {
        $scope.data.rows = res;
      }
    );

  });

//a generator fake data for the component
  mod.factory('Contractors', function($q) {
    var deferred = $q.defer();

    var list = [];
    for(var i = 1; i <= 10; i++ ) {
      list.push({
          img: 'assets/images/angular.png',
          title: 'Contractor '+i,
          description: 'Contractor Desc '+i
        }
      );
    }
    deferred.resolve(list);

    return deferred.promise;
  });

