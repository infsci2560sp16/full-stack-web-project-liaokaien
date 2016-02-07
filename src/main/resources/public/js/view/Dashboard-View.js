var Backbone = require('backbone');
var ProjectListView = require('./ProjectLists-View.js');

module.exports = Backbone.View.extend({
    el: '#app_container',
    initialize: function(){
        this.render();
    },

    render: function(){
        var projectList = new ProjectListView({model:this.model});
        this.$el.append(projectList.$el);
    }
});
