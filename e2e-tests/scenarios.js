'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var View1Page = require('./pages/view1.page.js');
//var View1Page = require('view1-page');

describe('my app', function() {

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/This is the partial for view 1/);

      var openBtn = element(by.id('btnOpen'));
      openBtn.click();

      browser.ignoreSynchronization = true;
      browser.getAllWindowHandles().then(function(handles) {
        browser.switchTo().window(handles[1]);
        var closeBtn = element(by.id('btnClose'));
        closeBtn.click();
        browser.ignoreSynchronization = false;
        browser.switchTo().window(handles[0]);

      });

      //browser.sleep(6000);

      expect(element.all(by.css('[ng-view] p')).first().getText()).
          toMatch(/This is the partial for view 1/);


    });



  });
});
