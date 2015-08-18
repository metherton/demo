(function() {

    'use strict';

    angular.module('myApp.sms').controller('SmsCtrl', SmsCtrl);

    SmsCtrl.$inject = ['smsFactory'];

    function SmsCtrl(smsFactory) {

        var vm = this;

        vm.sendMessage = sendMessage;

        function sendMessage() {
            smsFactory.send().then(success, error);
        }

        function success() {
            vm.messageSuccessfullySent = true;
        }

        function error() {
            vm.messageSendError = true;
        }
    }

})();
