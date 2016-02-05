var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    tagName: 'li',
    className: 'project_item',
    initialize:function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.model.get('name'));
    }

});
