var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#list_item_template').html()),
    className: 'project_item',
    initialize:function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.attributes));
    }
});
