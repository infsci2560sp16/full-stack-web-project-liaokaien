var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var fetchUrl = "http://www.liaokaien.com/api/code2gether/login";
module.exports = Backbone.View.extend({
    el: 'section.form_container',
    template: _.template($('#form_template').html()),
    events:{
        "click #btn_submit" : "login"
    },
    initialize : function(){
        this.render();
    },
    render: function(){
        this.$el.append(this.template());
    },

    login: function(){
        var password = this.$el.find('#form_password').val(),
            uname    = this.$el.find('#form_password').val(),
            token = btoa(password + ':' + uname),
            self = this;

        $.post(fetchUrl, {token:token}, function(res){
            if(res.success && res.token === token){
                window.location = '/index';
            } else{
                self.pop(res.error);
            }
        });
    },

    pop: function(error){
        // Indicate the error message
    }


});


