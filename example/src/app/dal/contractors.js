'use strict';

//generator of fake data for the component
angular.module('app')
  .factory('Contractors', function($q) {
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
