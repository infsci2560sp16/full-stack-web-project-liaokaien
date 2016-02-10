var Backbone = require('backbone');
var $ = require('jquery');
var ProjectItemView = require('./ProjectItem-View.js');
var util = require('../util.js');
var config = require('../config.js');
var baseUrl = config.baseUrl;

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
        var origin = this.attributes['data-origin'],
            self = this,
            listType = this.className.split(' ')[1],
            uid = util.getQueryParams()['u'],
            fetchUrl = origin === 'dashboard'
                ? baseUrl + '/user/projects'
                : baseUrl + '/user/'+ uid + '/projects';
        fetchUrl += '/' + listType;
        this.model.url = fetchUrl;
        $.getJSON(fetchUrl, function(data){
            self.model.reset(data);
            self.addProjectItems();
        });
    }
});
