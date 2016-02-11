var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var util = require('../util.js');
var uid = util.getQueryParams().uid;
var config = require('../config.js');
var baseUrl = config.baseUrl;
module.exports = Backbone.View.extend({
    el: '#user_profile',
    template: _.template($('#profile_template').html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        var fetchUrl;
        if(this.model.origin === 'dashboard'){
            fetchUrl = baseUrl + '/user/profile';
        } else {
            fetchUrl = baseUrl + '/user/' + uid + '/profile';
        }
        var self = this;
        $.getJSON(fetchUrl, function(data){
            self.$el.append(self.template(data));
        });
    }
});
