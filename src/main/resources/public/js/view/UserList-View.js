var Backbone = require('backbone'),
    $        = require('jquery'),
    _        = require('underscore');

module.exports = Backbone.View.extend({
    el: 'section#user_list_wrap',
    template : _.template($('#user_list_template').html()),
    initialize: function(){
        console.log(this.model);
        this.render();
    },

    render: function(){
        this.$el.append(this.template(this.model));
    }
});
