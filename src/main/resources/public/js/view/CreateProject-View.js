var FormView = require('./Form-View.js');
var $ = require('jquery');
var _ = require('underscore');
var config = require('../config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + '/user/relation';
var submitUrl = '/project';
module.exports = FormView.extend({
    render: function(){
        var self = this;
        $.getJSON(fetchUrl, function(data){
            data = {friends: data};
            self.$el.append(self.template(data));
        });
    },
    submit: function(){
        var data = {
            project_name: this.$el.find('form_project_name').val(),
            observer_id: this.$el.find('#invite_dropdown select').val()
        };
        $.post(submitUrl, data, function(res){
            var template = _.template($('#confirm_template').html());
            $('#site_desc').remove();
            this.$el.html(template(res));
            // Clear all content;
        }.bind(this));
    },

    pop: function(){
        // Pop up message that the project is successfully
        // created and redirect to the project inspector url
    }
});
