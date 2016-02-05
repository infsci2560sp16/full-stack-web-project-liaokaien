var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: '#app_banner',
    template: _.template($('#banner_template').html()),
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.append(this.template());
    }
});
