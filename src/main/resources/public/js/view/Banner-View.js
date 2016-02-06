var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: '#app_banner',
    template: _.template($('#banner_template').html()),
    events: {
        // "event selector" : "handler" 
        "mouseenter #btn_notification":    "showNotificationBox",
        "mouseleave #notification":   "hideNotificationBox"
    },
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.append(this.template(this.model));
    },
    showNotificationBox: function(){
        this.$el.find('ul').show();
    },
    hideNotificationBox: function(){
        this.$el.find('ul').hide();
    }
});
