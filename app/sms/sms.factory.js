(function() {

    'use strict';

    angular.module('myApp.sms').factory('smsFactory', smsFactory);

    smsFactory.$inject = ['$resource', '$q'];

    function smsFactory($resource, $q) {

        var smsApi = $resource('http://localhost:3000/sms/:smsId');

        return {
            send: send
        };

        function send(smsInfo) {
            var deferred = $q.defer();
            smsApi.save({phone: smsInfo.phone, message: smsInfo.message}).$promise.then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }


    }

})();