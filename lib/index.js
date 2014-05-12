var request = require('request');
var async = require('async');
var util = require('util');
var colors = require('colors');
var http = require('http');

exports = module.exports = function (options) {

    function Scraper (options) {
        this.waitTime = options.waitTime || 10000;

        var agent = new http.Agent(); // http agent
        agent.maxSockets = options.sockets || 5;

        this.agent = agent;
    }

    Scraper.prototype.content = require('./content')();
    Scraper.prototype.handler = require('./handler')();
    Scraper.prototype.distribute = require('./distribute')(options.ipc);
    Scraper.prototype.process = require('./process')(options.handleEntry);
    Scraper.prototype.fetch = require('./fetch')(request);
    Scraper.prototype.run = require('./run')(options.getSources);

    return new Scraper(options);
};