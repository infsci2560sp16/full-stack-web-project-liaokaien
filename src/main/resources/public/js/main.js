var $ = require('jquery');
var _ = require('underscore');
var config = require('./config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + '/banner_data';
var path = window.location.pathname.slice(1);
var BannerView = require('./view/Banner-View.js');
var util = require('./util.js');
console.log(path);
function renderBanner(data){
    new BannerView({
        model: data
    });
}

// load notifications
$.getJSON(fetchUrl, renderBanner);

//Route url to dashboard view.
if(path === 'index' || path === 'user_profile'){
    var DashboardView = require('./view/Dashboard-View.js');
    var ProfileView = require('./view/UserProfile-View.js');

    //Render dashboard
    new DashboardView(
        {
            model: {
                dataOrigin: path
            }
        });
    new ProfileView({
        model:{
            origin: path
        }
    });

    //Auto select 'Recent' Tab
    $('.tab.recent').click();
}

if(path === 'search_result'){
    var UserListView = require('./view/UserList-View.js'),
        query        = util.getQueryParams().q;
    $.getJSON(baseUrl+'/search?q=' + query, function(res){
        var data  = {
            success: res.length?true:false,
            userList: res
        };
        new UserListView({
            model:data
        });
    });
}
//Route url to user_profile view.

//Route url to user search view.
