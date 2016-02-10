var config = require('./config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + '/banner_data';
var BannerView = require('./view/Banner-View.js');
var CreateProjectView =require('./view/CreateProject-View.js');
var $ = require('jquery');

new CreateProjectView();
function renderBanner(data){
    new BannerView({
        model: data
    });
}

// load notifications
$.getJSON(fetchUrl, renderBanner);
