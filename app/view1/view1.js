'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

}])

.controller('View1Ctrl', ['$scope', '$window', function($scope, $window) {

      //console.log('scope', $scope);

      $scope.openModal = function() {
        $window.open('view1/modal.html', '_blank', 'height=500,width=500');
      }

}]);