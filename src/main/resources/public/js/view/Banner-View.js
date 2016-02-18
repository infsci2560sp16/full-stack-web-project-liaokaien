var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var config = require('../config.js');
var baseUrl = config.baseUrl;
Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: '#app_banner',
    template: _.template($('#banner_template').html()),
    events: {
        // "event selector" : "handler"
        "mouseenter #btn_notification":    "showNotificationBox",
        "mouseleave #notification":   "hideNotificationBox",
        "change #search_user input":        "searchUser"
    },
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.append(this.template(this.model));
    },
    showNotificationBox: function(){
        this.$el.find('ul').addClass('show');
    },
    hideNotificationBox: function(){
        this.$el.find('ul').removeClass('show');
    },
    processQuery: function(queryStr){
        return queryStr;
    },
    searchUser: function(event){
        var searchQuery = this.processQuery(event.target.value);
        window.location.href = '/search_result.html?q=' + searchQuery;
    }
});
