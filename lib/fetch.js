var async = require('async');
var util = require('util');
var debug = require('debug')('sitescraper:fetch');
var userAgents = require('./user-agents')();

exports = module.exports = function (request) {
    return function (site, agent, callback) {
        var requestOptions = {
            url: site.url,
            encoding: null, // return body as a buffer with no encoding
            headers: {
                'user-agent': userAgents[site.format] || userAgents['desktop']
            },
            pool: agent
        };

        request(requestOptions, function (err, response, body) {
            if (err) {
                debug('error when polling site: ' + site.url);
                debug(util.inspect(err));
            }
            callback(err, body);
        });
    };
};
