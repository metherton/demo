'use strict';

xdescribe('sms controller', function() {

    var smsCtrl;
    var mockSmsFactory;
    var $q, deferredResponse;
    var $rootScope;

    beforeEach(module('myApp.sms'));

    beforeEach(module(function($provide) {
        mockSmsFactory = {};
        $provide.value('smsFactory', mockSmsFactory);
    }));

    beforeEach(inject(function($controller, _$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        deferredResponse = $q.defer();
        mockSmsFactory.send = jasmine.createSpy('smsFactory.send').and.returnValue(deferredResponse.promise);
        mockSmsFactory.get = jasmine.createSpy('smsFactory.get').and.returnValue(deferredResponse.promise);
        smsCtrl = $controller('SmsCtrl');
    }));


    it('should invoke smsFactory send method', function() {
        smsCtrl.sendMessage();
        expect(mockSmsFactory.send).toHaveBeenCalled();
    });

    it('should invoke smsFactory get method', function() {
        smsCtrl.getMessage();
        expect(mockSmsFactory.get).toHaveBeenCalled();
    });

});