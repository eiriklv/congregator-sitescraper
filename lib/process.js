var async = require('async');
var debug = require('debug')('sitescraper:processing');
var colors = require('colors');
var util = require('util');

exports = module.exports = function () {
    return function (site, articles, callback, operation) {
        debug('processing body for site' + operation + ': '.cyan + site.name);

        var updateCount = 0; // keep count of how many articles are updated (duplicates)
        var insertCount = 0; // keep count of how many articles are new
        var newEntries = []; // hold new entries for further processing

        // async flow control
        async.series({
            processEntries: function (callback) {
                async.eachSeries(articles, function (item, callback) {
                    this.handleEntry(item, function (err, newPost) {
                        if (err) return callback(err);

                        var cleanEntry;

                        if (newPost) {
                            cleanEntry = newPost.toObject ? newPost.toObject() : newPost;
                        }

                        if (cleanEntry) {
                            cleanEntry.guid = cleanEntry.guid || 'no id available';
                            debug('processed new entry with guid: ' + cleanEntry.guid.yellow);
                            newEntries.push(cleanEntry);
                            insertCount++;
                        } else {
                            updateCount++;
                        }
                        callback();
                    }.bind(this));
                }.bind(this), function (err) {
                    callback(err, newEntries);
                });
            }.bind(this),
            printData: function (callback) {
                debug(site.name.cyan + operation + ' - '.grey + ' updated: ' + updateCount.toString().yellow + ' new: ' + insertCount.toString().magenta);
                callback();
            }.bind(this)
        }, function (err, results) {
            callback(err, results.processEntries);
        });
    };
};
