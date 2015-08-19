'use strict';

describe('smsFactory', function() {

    var smsFactory;
    var $httpBackend;
    var resultData, resultError;

    function successHandler(data) {
        resultData = data;
    }

    function errorHandler(error) {
        resultError = error;
    }

    beforeEach(function() {
        module('myApp.sms');
        inject(function(_smsFactory_, _$httpBackend_) {
           smsFactory = _smsFactory_;
           $httpBackend = _$httpBackend_;
        });
    });

    it('should do a POST request on the sms api', function() {
        smsFactory.send().then(successHandler, errorHandler);

        var expectedPostData = {phone: '+31624543741', message: 'test message'};
        $httpBackend.expectPOST('http://localhost:3000/sms', expectedPostData).respond({data: 'ok'});
        expect(resultData).toBeUndefined();

        $httpBackend.flush();
        expect(resultData.data).toBe('ok');
        expect(resultError).toBeUndefined();
    });

});