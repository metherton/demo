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
            return smsApi.save({phone: '+31624543741', message: 'test message'});
        }


    }

})();