var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: 'aside',
    template: _.template($('#aside_nav_template').html()),
    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.append(this.template(this.model));
    }
});
