(function() {

    'use strict';

    angular.module('myApp.sms').controller('SmsCtrl', SmsCtrl);

    SmsCtrl.$inject = ['smsFactory'];

    function SmsCtrl(smsFactory) {

        var vm = this;

        vm.sendMessage = sendMessage;

        function sendMessage() {
            smsFactory.send();
            //smsFactory.send().then(function(data) {
            //    console.log(data);
            //});
        }
    }

})();
