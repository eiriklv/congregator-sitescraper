var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var util = require('util');
var url = require('url');

exports = module.exports = function () {
    return function (body, site, callback) {
        var $ = cheerio.load(body);
        var resultList = [];
        var ranking = 1;

        // THIS IS SYNCRONOUS
        site.template.containers.forEach(function (container) {
            // loop through all the container types that can hold articles
            $(container.selector).each(function () {
                // flag for valid entry
                var valid = false;

                // article-entry
                var entry = {
                    site: site.name,
                    source: site.url,
                    host: url.parse(site.url).host,
                    origin: site.origin
                };

                // this is where we fetch all the data
                container.elements.forEach(function (element) {
                    var holder; // hold the result

                    // if the element is required for entry to be valid, then set validity to false
                    if (element.required) {
                        valid = false;
                    }

                    // loop through all the items
                    element.items.forEach(function (item) {
                        // use selector to find DOM element
                        $(item.selector, this).each(function () {
                            // find attribute (use element text if no attribute is provided)
                            if (item.attribute && $(this).attr(item.attribute)) {
                                holder = $(this).attr(item.attribute).trim();
                            }
                            else {
                                holder = $(this).text().trim();
                            }

                            // delimit the text if required
                            if (holder && item.delimiter) {
                                var tempHolder = holder.toString();
                                holder = tempHolder.slice(0, tempHolder.indexOf(item.delimiter)).trim();
                            }

                            // set item if it has been found
                            if (holder && !entry[element.name]) {
                                entry[element.name] = holder;
                            }
                        });
                    }.bind(this));

                    // add fallback if supplied
                    if (element.fallback && !entry[element.name]) {
                        entry[element.name] = element.fallback;
                    }

                    if (entry[element.name] && (element.type == 'url')) {
                        entry[element.name] = fixRelativePath(entry[element.name], entry.source);
                    }

                    // check if item is required for entry to be valid, and then check if item is set
                    if (element.required && entry[element.name]) {
                        valid = true;
                    }

                }.bind(this));

                // push entry to array (if a link is found in the article)
                if (valid) {
                    entry.ranking = ranking++;
                    resultList.push(entry);
                }
            });
        });

        callback(null, resultList);
        //return resultList;
    };
};

// helper for completing relative paths
function fixRelativePath (link, source) {
    var pat = /^https?:\/\//i;
    return !pat.test(url) ? url.resolve(source, link) : link;
}
