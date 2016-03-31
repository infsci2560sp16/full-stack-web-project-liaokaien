var $ = require('jquery');
var _ = require('underscore');
var config = require('./config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + '/banner_data';
var path = window.location.pathname.slice(1).split('.')[0];
var BannerView = require('./view/Banner-View.js');
var util = require('./util.js');

// load notifications
$.getJSON(fetchUrl, renderBanner);

var ProjectsListView, ProfileView, UserListView;

//Route url to dashboard view.
if (path === 'index' || path === 'user_profile'){
    ProjectsListView = require('./view/ProjectLists-View.js');
    ProfileView = require('./view/UserProfile-View.js');
    UserListView = require('./view/UserList-View.js');

    //Render dashboard
    new ProjectsListView(
        {
            model: {
                dataOrigin: path
            }
        });

    new ProfileView({
        model: {
            origin: path
        }
    });

    if (path === 'index'){
        fetchUrl = '/user/relation';
    } else {
        fetchUrl = '/user/' + util.getQueryParams().u + '/relation';
    }
    $.getJSON(fetchUrl, renderUserList);

    //Auto select 'Recent' Tab
    $('.tab.recent').click();
}

if (path === 'search_result'){
    UserListView = require('./view/UserList-View.js');
    var query = util.getQueryParams().q;
    $.getJSON('/search?q=' + query, function(res){
        var data = {
            success: res.length,
            userList: res
        };
        new UserListView({
            model: data
        });
    });
}
//Route url to user_profile view.

//Route url to user search view.



function renderBanner(data){
    new BannerView({
        model: data
    });
}

function renderUserList(res){
    var data  = {
        success: res.length,
        userList: res
    };
    new UserListView({
        model: data
    });
}
