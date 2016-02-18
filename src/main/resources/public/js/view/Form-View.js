var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var config = require('../config.js');
var baseUrl = config.baseUrl;
var fetchUrl = baseUrl + "/login";
module.exports = Backbone.View.extend({
    el: '.form_container',
    template: _.template($('#form_template').html()),
    events:{
        "click #btn_submit" : "submit",
        "click #btn_cancel" : "cancel"
    },
    initialize : function(){
        this.render();
    },
    render: function(){
        this.$el.append(this.template());
    },

    submit: function(){
        var password = this.$el.find('#form_password').val(),
            uname    = this.$el.find('#form_password').val(),
            token = btoa(password + ':' + uname),
            self = this;
        var passwordConfirmation = this.$el.find('#form_confirm_password').val();
        if(typeof passwordConfirmation !== "undefined"  ){
            if(passwordConfirmation !== password) {
                this.pop("Please confirm password again");
                return;
            }else{
                fetchUrl = "http://www.liaokaien.com/api/code2gether/signup";
            }
        }
        $.post(fetchUrl, {token:token}, function(res){
            if(res.success && res.token === token){
                window.location = '/index.html';
            } else{
                self.pop(res.error);
            }
        });
    },

    cancel: function(){
        window.history.back();
    },

    pop: function(error){
        // Indicate the error message
        this.$el.find('.error_msg').text(error);
    }


});
