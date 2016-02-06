var Backbone = require('backbone');
var ListView = require('./List-View.js');
var ProjectsListModel = require('../collection/ProjectsCollection.js');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
    tagName : 'section',
    id: 'projects_list_container',
    template: _.template($('#list_template').html()),
    initialize : function(){
        this.render();

    },
    render: function(){
        // Render the basic structure
        this.$el.append(this.template());

        var container = this.$el.find("#projects_container");

        // Map list tab name to three ListView Backbone.View object
        var lists = ['recent', 'observer', 'driver'].map(function(el){
            var listview = new ListView({
                className : 'project_list ' + el,
                model: new ProjectsListModel()
            });
            return listview;
        });
        // Append three ListView object to #projects_container
        lists.forEach(function(ul){
            container.append(ul.$el);
        });
    }
});
