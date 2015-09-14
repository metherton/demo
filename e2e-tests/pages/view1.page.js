'use strict';

var View1Page = function () {
    browser.get('http://localhost:8000/app/index.html#/view1');
};

View1Page.prototype = Object.create({}, {
    descriptionText: { get: function () { return element.all(by.css('[ng-view] p')).first(); }},
});

module.exports = View1Page;