var $ = require('jquery');
var config = require('./config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + '/banner_data';
var path = window.location.pathname.slice(1).split('.')[0];
var BannerView = require('./view/Banner-View.js');
var DashboardView = require('./view/Dashboard-View.js');
var ProfileView = require('./view/UserProfile-View.js');

function renderBanner(data){
    new BannerView({
        model: data
    });
}

// load notifications
$.getJSON(fetchUrl, renderBanner);

//Route url to dashboard view.
if(path === 'index'){
    //Render dashboard
    new DashboardView(
        {
            model: {
                dataOrigin: 'dashboard'
            }
        });
    new ProfileView({
        model:{
            origin: 'dashboard'
        }
    });

    //Auto select 'Recent' Tab
    $('.tab.recent').click();
}

//Route url to user_profile view.
if(path === 'user_profile'){
    new ProfileView({
        model:{
            origin: 'user_profile'
        }
    });

    //User's project(open)
    new DashboardView({
        model: {
            dataOrigin: 'user_profile'
        }
    });
    //Auto select 'Recent' Tab
    $('.tab.recent').click();
}

//Route url to user search view.
