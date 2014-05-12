var debug = require('debug')('sitescraper:testapp');
var util = require('util');
var events = require('events');
var ipc = new events.EventEmitter();

function isActive (element) {
    return element.active;
}

var handleEntry = function (item, callback) {
    debug(util.inspect(item, { colors: true }));
    callback(null, item);
};

var getSites = function (options, callback) {
    var sites = require('./template');
    callback(null, sites.filter(isActive));
}

// website scraper module
var siteScraper = require('../lib/')({
    getSources: getSites,
    handleEntry: handleEntry,
    ipc: ipc,
    sockets: 15, // experiment with this number to avoid getting blocked connections (DDOS protection)
    waitTime: 10000
});

console.log('running scraper');

siteScraper.run();