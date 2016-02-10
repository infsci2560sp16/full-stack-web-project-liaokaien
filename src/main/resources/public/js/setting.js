var $ = require('jquery');
var config = require('./config.js');
var baseUrl = config.baseUrl;
var BannerView = require('./view/Banner-View.js');
var SettingView = require('./view/Setting-View.js');
var fetchUrl;
function renderBanner(data){
    new BannerView({
        model: data
    });
}
function renderSettingForm(data){
    new SettingView({
        model: data
    });
}
// load user setting
fetchUrl = baseUrl + '/user/setting';
$.getJSON(fetchUrl, renderSettingForm);
// load notifications
fetchUrl = baseUrl + '/banner_data';
$.getJSON(fetchUrl, renderBanner);



