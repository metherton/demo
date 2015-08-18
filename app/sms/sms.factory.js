(function() {

    'use strict';

    angular.module('myApp.sms').factory('smsFactory', smsFactory);

    smsFactory.$inject = ['$resource'];

    function smsFactory($resource) {

        var smsApi = $resource('http://localhost:3000/sms/:smsId');

        return {
            send: send
        };

        function send() {
            //var response = smsApi.save({phone: '+31624543741', message: 'test message'});
            //console.log(response);
            //return response;
            return smsApi.save({phone: '+31624543741', message: 'test message'}).$promise.then();
        }


    }

})();