var $ = require('jquery');
var _ = require('underscore');

var getQueryParams = function(queryString) {
    var query = (queryString || window.location.search).substring(1); // delete ?
    if (!query) {
        return false;
    }
    return _
        .chain(query.split('&'))
        .map(function(params) {
            var p = params.split('=');
            return [p[0], decodeURIComponent(p[1])];
        })
        .object()
        .value();
};

module.exports = {
    getQueryParams: getQueryParams
};
