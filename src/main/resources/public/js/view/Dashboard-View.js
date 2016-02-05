var Backbone = require('backbone');
var ListView = require('./List-View.js');
var ProjectsListModel = require('../collection/ProjectsCollection.js');

var util = require('../util.js');
var _userid = util.getQueryParams().u;

function concatQuery(listType){
    var userid = _userid,
    fetchUrl= 'http://www.liaokaien.com/api/code2gether/projects';
    fetchUrl += '/' + listType + '/' + userid ;
}

module.exports = Backbone.View.extend({
    el: '#projects_container',
    initialize: function(){
        this.render();
    },

    render: function(){
        // Map list tab name to three ListView Backbone.View object
        var lists = ['recent', 'observer', 'driver'].map(function(el){
            var listview = new ListView({
                className : 'project_list ' + el,
                model: new ProjectsListModel()
            });
            return listview;
        });

        // Store a access to Dashboard View
        var self = this;

        // Append three ListView object to Dashboard
        lists.forEach(function(ul){
            self.$el.append(ul.$el);
        });
    }
});
