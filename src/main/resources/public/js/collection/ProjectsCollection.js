var Backbone = require('backbone');
var Project = require('../model/Project.js');

module.exports = Backbone.Collection.extend({
    modle: Project,
    initialize: function(){
    }
});
