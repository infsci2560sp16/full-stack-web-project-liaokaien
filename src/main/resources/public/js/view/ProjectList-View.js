var Backbone = require('backbone');
var $ = require('jquery');
var ProjectItemView = require('./ProjectItem-View.js');
var util = require('../util.js');
var config = require('../config.js');

module.exports = Backbone.View.extend({
    tagName: 'ul',
    initialize: function() {
        this.render();
    },
    addProjectItems: function() {
        var self = this;
        this.model.models.forEach(function(model) {
            var item = new ProjectItemView({
                model: model
            });
            self.$el.append(item.$el);
        });
    },

    xml2Json: function(XMLDocument) {
        var json;
        var projects = XMLDocument.getElementsByTagName('Project');
        projects = Array.prototype.slice.call(projects);
        json = projects.map(function(project){
           var data = {
               name: project.getElementsByTagName('name')[0].textContent,
               project_id: project.id,
               related_uid:project.getElementsByTagName('related_uid')[0].textContent,
               related_uname: project.getElementsByTagName('related_uname')[0].textContent,
               type: project.getElementsByTagName('type')[0].textContent
           };
           return data;
        });
        return json;
    },

    render: function() {
        var origin = this.attributes['data-origin'],
            self = this,
            listType = this.className.split(' ')[1],
            uid = util.getQueryParams().u,
            fetchUrl = origin === 'index' ? '/user/projects' : '/user/' + uid + '/projects';
        fetchUrl += '/' + listType;
        this.model.url = fetchUrl;
        $.ajax(fetchUrl, {
            method: 'GET',
            success: function(data) {
                data = self.xml2Json(data);
                self.model.reset(data);
                self.addProjectItems();
            }
        });
    }
});
