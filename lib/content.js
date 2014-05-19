var read = require('node-read');
var async = require('async');
var debug = require('debug')('sitescraper:content-fetcher');
var util = require('util');
var Entities = require('html-entities').AllHtmlEntities;
var entities = new Entities();

exports = module.exports = function () {
    return function (site, entries, callback) {
        if (!site.body){
            callback(null, null);
            return;
        }

        var processed = [];

        // loop through each entry and get the body content
        async.each(entries, function (item, callback) {
            process.nextTick(function () {
                read(item.link, { pool: this.agent, timeout: this.timeOut }, function (err, article, res) {
                    // override when error occurs
                    if (err) {
                        debug('got error for guid: ' + item.guid + ' - ' + util.inspect(err));
                        callback();
                        return;
                    }

                    // add content to item
                    item.content = {
                        title: article.title,
                        body: entities.decode(article.content)
                    };

                    // add to result list
                    processed.push(item);

                    // callback
                    callback();
                }.bind(this));
            }.bind(this));
        }.bind(this),
        function (err) {
            if (err) debug(util.inspect(err));
            callback(err, processed);
        });
    };
};
