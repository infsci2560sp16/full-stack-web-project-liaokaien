var FormView = require('./Form-View.js');
var $ = require('jquery');
var _ = require('underscore');
var config = require('../config.js');
var baseUrl = config.baseUrl;

module.exports = FormView.extend({
    events: function(){
        return _.extend({
            'input #form_password' : 'showOldPasswordInput'
        }, FormView.prototype.events);
    },

    render: function(){
        this.$el.append(this.template(this.model));
    },
    initialize : function(){
        this.render();
    },

    cancel: function(){
        // window.location.href = '/index';
    },

    submit: function(){
    },
    showOldPasswordInput: function(event){
        var pw = $(event.target).val();
        if(pw.length > 0){
            this.$el.find('.form_row.old_password').removeClass('hidden');
        }else{
            this.$el.find('.form_row.old_password').addClass('hidden');
        }
    }

});
