(function() {

    'use strict';

    angular.module('myApp.sms').factory('smsFactory', smsFactory);

    smsFactory.$inject = ['$resource', '$q'];

    function smsFactory($resource, $q) {

        var smsApi = $resource('http://localhost:3000/sms/:smsId');

        return {
            send: send
        };

        function send() {
            var deferred = $q.defer();
            smsApi.save({phone: '+31624543741', message: 'test message'}).$promise.then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }


    }

})();