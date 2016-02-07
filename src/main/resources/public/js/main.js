var $ = require('jquery');
var fetchUrl = 'http://www.liaokaien.com/api/code2gether/banner_data';
var path = window.location.pathname.slice(1).split('.')[0];
var BannerView = require('./view/Banner-View.js');
var DashboardView = require('./view/Dashboard-View.js');

function renderBanner(data){
    new BannerView({
        model: data
    });
}

// load notifications
$.getJSON(fetchUrl, renderBanner);

//Route url to view.
if(path === 'index'){
    //Render dashboard
    new DashboardView(
        {
            model: {
                dataOrigin: 'dashboard'
            }
        });
    //Auto select 'Recent' Tab
    $('.tab.recent').click();
}

//Route url to view.
if(path === 'user_profile'){
    var ProfileView = require('./view/UserProfile-View.js');
    new ProfileView();
    new DashboardView(
        {
            model: {
                dataOrigin: 'user_profile'
            }
        });
    //Auto select 'Recent' Tab
    $('.tab.recent').click();
}
