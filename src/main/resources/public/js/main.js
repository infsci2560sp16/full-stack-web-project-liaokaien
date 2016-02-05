var util = require('./util.js');
var path = window.location.path.slice(1).split('.')[0];

// Route url to view.
if(path === 'index'){
    var BannerView = require('./view/Banner-View.js');
    var DashboardView = require('./view/Dashboard-View.js');
    var AsideNavView = require('./view/AsideNav-View.js');

    new AsideNavView({
        model:{
            userid : util.getQueryParams().u
        }
    });
    new BannerView();
    new DashboardView();
}
