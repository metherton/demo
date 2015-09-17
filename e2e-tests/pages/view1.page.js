'use strict';

var View1Page = function () {
    browser.get('http://localhost:8000/app/index.html#/view1');

};

View1Page.prototype = Object.create({}, {
    descriptionText: { get: function () { return element.all(by.css('[ng-view] p')).first(); }},
    nuLink: { get: function() {return element(by.id('nu'))}},
    googleLink: { get: function() {return element(by.id('google'))}}
});

module.exports = View1Page;