(function() {

    'use strict';

    angular.module('myApp.sms', ['ngRoute', 'ngResource'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/sms', {
                templateUrl: 'sms/sms.html',
                controller: 'SmsCtrl',
                controllerAs: 'vm'
            });
        }]);


})();
