var request = require('request');
var async = require('async');
var util = require('util');
var colors = require('colors');
var http = require('http');

exports = module.exports = function () {

    function Scraper (options) {
        this.ipc = options.ipc;
        this.handleEntry = options.handleEntry;
        this.getSources = options.getSources;
        this.waitTime = options.waitTime || 10000;
        this.timeOut = options.timeOut || 10000;

        var agent = new http.Agent(); // http agent
        agent.maxSockets = options.sockets || 5;

        this.agent = agent;
    }

    Scraper.prototype.content = require('./content')();
    Scraper.prototype.handler = require('./handler')();
    Scraper.prototype.distribute = require('./distribute')();
    Scraper.prototype.process = require('./process')();
    Scraper.prototype.fetch = require('./fetch')(request);
    Scraper.prototype.run = require('./run')();

    return Scraper;
};