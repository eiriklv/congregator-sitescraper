var async = require('async');
var debug = require('debug')('sitescraper:distribution');
var colors = require('colors');

exports = module.exports = function () {
    return function (site, entries, callback) {
        debug('realtime distribution for: '.cyan + site.name);

        var distributed = 0;

        // async flow control
        async.series({
            distributeEntries: function (callback) {
                async.each(entries, function (entry, callback) {
                    if (entry && this.ipc) {
                        debug('sending realtime update via event emitter');
                        this.ipc.emit('newpost', entry);
                        distributed++;
                    }
                    callback();
                }.bind(this), function (err) {
                    callback(err);
                });
            }.bind(this),
            printData: function (callback) {
                debug(site.name.cyan + '(distribution)'.blue + ' - '.grey + 'distributed: '.yellow + distributed.toString().green);
                callback();
            }.bind(this)
        }, function (err, results) {
            callback(err, entries);
        });
    };
};
