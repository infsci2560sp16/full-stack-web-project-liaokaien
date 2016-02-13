var Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('underscore'),
    config = require('../config.js');

var baseUrl = config.baseUrl;

module.exports = Backbone.View.extend({
    el: '#message_panel',
    template: _.template($('#message_panel_template').html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.append(this.template());
    }
});
