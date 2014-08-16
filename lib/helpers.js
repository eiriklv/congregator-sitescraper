var url = require('url');

exports = module.exports = {
    containsIllegalDomain: function (url) {
        var url = url || '';

        var illegalDomains = [
            'nytimes.com'
        ];

        var result;

        illegalDomains.forEach(function (domain) {
            if (url.toLowerCase().indexOf(domain) != -1) {
                result = domain;
            }
        });

        return result;
    },
    getMetaImage: function ($, link) {
        var meta = $('meta');
        var keys = Object.keys(meta);

        var ogImage;

        keys.forEach(function (key) {
            if (meta[key].attribs && meta[key].attribs.property && meta[key].attribs.property === 'og:image') {
                ogImage = meta[key].attribs.content;
            }
        });

        return ogImage;
    },
    fixRelativePath: function (link, source) {
        if (!link) return;

        var pat = /^https?:\/\//i;
        return !pat.test(link) ? url.resolve(source, link) : link;
    }
};
