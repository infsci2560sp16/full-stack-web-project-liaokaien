var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var util = require('../util.js');
var uid = util.getQueryParams()['uid'];
module.exports = Backbone.View.extend({
    el: '#user_profile',
    template: _.template($('#profile_template').html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        var fetchUrl = 'http://www.liaokaien.com/api/code2gether/user/profile/' + uid;
        var self = this;
        $.getJSON(fetchUrl, function(data){
            self.$el.append(self.template(data));
        });
    }
});
