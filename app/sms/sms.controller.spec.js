'use strict';

describe('sms controller', function() {

    var smsCtrl;
    var mockSmsFactory;
    var $q, deferredResponse;

    beforeEach(module('myApp.sms'));

    beforeEach(module(function($provide) {
        mockSmsFactory = {};
        $provide.value('smsFactory', mockSmsFactory);
    }));

    beforeEach(inject(function($controller, _$q_) {
        $q = _$q_;
        deferredResponse = $q.defer();
        mockSmsFactory.send = jasmine.createSpy('smsFactory.send').and.returnValue(deferredResponse.promise);
        smsCtrl = $controller('SmsCtrl');
    }));


    it('should invoke smsFactory send method', function() {
        smsCtrl.sendMessage();
        expect(mockSmsFactory.send).toHaveBeenCalled();
    });

});