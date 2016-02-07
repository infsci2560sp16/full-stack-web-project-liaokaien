var Backbone = require('backbone');
var ListView = require('./List-View.js');
var ProjectsListModel = require('../collection/ProjectsCollection.js');
var _ = require('underscore');
var $ = require('jquery');

var tabList = ['recent', 'driver', 'observer'];
module.exports = Backbone.View.extend({
    tagName : 'section',
    id: 'projects_list_container',
    template: _.template($('#list_template').html()),
    events: {
        "click #tab_switcher .tab" : "switchTab"
    },
    initialize : function(){
        this.render();

    },
    render: function(){
        // Render the basic structure
        this.$el.append(this.template());

        var container = this.$el.find("#projects_container");

        var $model = this.model;
        // Map list tab name to three ListView Backbone.View object
        var lists = tabList.map(function(el){
            var listview = new ListView({
                className : 'project_list ' + el,
                attributes: {
                    "data-origin" : $model['dataOrigin']
                },
                model: new ProjectsListModel()
            });
            return listview;
        });
        // Append three ListView object to #projects_container
        lists.forEach(function(ul){
            container.append(ul.$el);
        });
    },

    switchTab: function(event){
        var displayTab = event.currentTarget.classList[1],
            hiddenTab  = tabList.filter(function(el){
            return el !== displayTab;
        });
        var self = this;
        _.chain(_.union([displayTab], hiddenTab))
            .zip([true, false, false])
            .each(function(operation){
                var selector = ['.project_list', '.tab'].map(function(el){
                    return el + '.' + operation[0];
                }).join(',');
                var element = self.$el.find(selector);
                element.removeClass('selected');
                if(operation[1]) element.addClass('selected');
            });
    }

});
