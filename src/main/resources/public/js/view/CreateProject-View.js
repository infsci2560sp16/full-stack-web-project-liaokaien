var FormView = require('./Form-View.js');
var $ = require('jquery');
var config = require('../config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + '/user/getRelation';
var submitUrl = baseUrl + '/new_project';
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
            projectName : this.$el.find("#form_project_name").val(),
            observer : this.$el.find('#invite_dropdown select').val()
        };
        $.post(submitUrl, data, function(res){
        });
    },

    pop: function(){
        // Pop up message that the project is successfully
        // created and redirect to the project inspector url
    }
});
