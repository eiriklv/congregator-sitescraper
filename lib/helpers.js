exports = module.exports = {
    containsIllegalDomain: function (url) {
        var url = url || '';

        var illegalDomains = [
            'nytimes.com'
        ];

        var result;

        illegalDomains.each(function (domain) {
            if (url.toLowerCase().indexOf(domain) != -1) {
                result = domain;
            }
        });

        return containsIllegal;
    }
};
