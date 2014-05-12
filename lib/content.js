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
            read(item.link, { pool: this.agent }, function(err, article, res) {
                if (err) {
                    debug('got error for guid: ' + item.guid + ' - ' + util.inspect(err));
                    callback();
                    return;
                }

                // add content to item
                item.content = {
                    title: article.title,
                    body: entities.decode(article.content)
                }

                // add to result list
                processed.push(item);

                callback();
            });
        }.bind(this), 
        function (err) {
            if (err) debug(util.inspect(err));
            callback(err, processed);
        });
    };
};
