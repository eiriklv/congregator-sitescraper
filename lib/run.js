var async = require('async');
var debug = require('debug')('sitescraper:run');
var colors = require('colors');

exports = module.exports = function (getSources) {
    return function (callback) {
        async.parallel({
            scraping: function (callback) {
                async.series({
                    getSourcesToProcess: function (callback) {
                        this.getSources({}, function (err, sites) {
                            this.sites = sites;
                            callback();
                        }.bind(this));
                    }.bind(this),
                    scrapeSites: function (callback) {
                        async.each(this.sites, function (site, callback) {
                            async.waterfall([
                                // fetch raw sites sites
                                function (callback) {
                                    this.fetch(site, this.agent, callback);
                                }.bind(this),
                                // format the body to json entries
                                function (body, callback) {
                                    body ? this.handler(body, site, callback) : callback();
                                }.bind(this),
                                // process entries
                                function (entries, callback) {
                                    entries ? this.process(site, entries, callback, '(initial)'.green, true) : callback();
                                }.bind(this),
                                // distribute new entries via event emitter
                                function (entries, callback) {
                                    entries ? this.distribute(site, entries, callback) : callback();
                                }.bind(this),
                                // fetch content from each new entry
                                function (entries, callback) {
                                    entries ? this.content(site, entries, callback) : callback();
                                }.bind(this),
                                // update entry with content (body, title)
                                function (entries, callback) {
                                    entries ? this.process(site, entries, callback, '(content)'.green) : callback();
                                }.bind(this)
                            ], function (err, results) {
                                callback(err);
                            });
                        }.bind(this), function (err) {
                            var msg = err ? 'error: '.red + util.inspect(err) : 'site scraper - all sites scraped...'.green;
                            debug(msg);
                            callback();
                        });
                    }.bind(this),
                }, function (err, results) {
                    if (err) debug('error: ' + util.inspect(err));
                    callback();
                });
            }.bind(this),
            wait: function (callback) {
                setTimeout(function () {
                    debug('done waiting');
                    callback();
                }.bind(this), this.waitTime);
            }.bind(this)
        }, function (err, results) {
            var msg = err ? 'error: '.red + util.inspect(err) : '-- all sites scraped successfully - starting over --'.grey;
            debug(msg);
            if (callback) callback();
        });
    };
};
