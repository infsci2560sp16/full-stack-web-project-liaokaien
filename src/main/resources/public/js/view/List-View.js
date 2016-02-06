var Backbone = require('backbone');
var $ = require('jquery');
var ProjectItemView = require('./ProjectItem-View.js');

module.exports = Backbone.View.extend({
    tagName : 'ul',
    initialize: function(){
        this.render();
    },
    addProjectItems: function(){
        var self = this;
        this.model.models.forEach(function(model){
            var item = new ProjectItemView({
                model: model
            });
            self.$el.append(item.$el);
        });
    },
    render: function(){
        var self = this,
            listType = this.className.split(' ')[1],
            fetchUrl= 'http://www.liaokaien.com/api/code2gether/projects';
        fetchUrl += '/' + listType;
        this.model.url = fetchUrl;
        $.getJSON(fetchUrl, function(data){
            self.model.reset(data);
            self.addProjectItems();
        });
    }
});
