var $ = require('jquery');
var fetchUrl = 'http://www.liaokaien.com/api/code2gether/banner_data';
var path = window.location.pathname.slice(1).split('.')[0];
// Route url to view.

function success(data){
    new BannerView({
        model: data
    });
}

if(path === 'index'){
    var BannerView = require('./view/Banner-View.js');
    var DashboardView = require('./view/Dashboard-View.js');
    // Load user_data: notification_list...
    $.getJSON(fetchUrl, success);
    new DashboardView();
}
