(function() {

    'use strict';

    angular.module('myApp.sms').controller('SmsCtrl', SmsCtrl);

    SmsCtrl.$inject = ['smsFactory', '$scope'];

    function SmsCtrl(smsFactory, $scope) {

        var vm = this;

        vm.sendMessage = sendMessage;
        vm.sms = {};

        function sendMessage() {
            smsFactory.send(vm.sms).then(success, error);
        }

        function getMessage() {
            smsFactory.get().then(successGet, errorGet);
        }


        function success() {
            vm.messageSuccessfullySent = true;
        }

        function successGet(data) {
            vm.messageSuccessfullyGot = data;
        }

        function errorGet() {
            vm.messageSendError = true;
        }
    }

})();
