var Backbone = require('backbone'),
    $ = require('jquery'),
    _ = require('underscore'),
    config = require('../config.js');

var baseUrl = config.baseUrl;

module.exports = Backbone.View.extend({
    el: '#message_panel',
    events:{
        'click .btn_send'       : 'sendComment'
    },
    template: _.template($('#message_panel_template').html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.append(this.template());
    },

    sendComment: function(){
        var commentText = $('.message_input').val(),
            lineNumber = commentText.match(/#(\d+)/)[1],
            commentContent = commentText.replace(/#(\d+)/,'');

        var cList = this.model.editor.model.commentList;
        cList[lineNumber-1].push(commentContent.trim());
        this.model.editor.renderGutters();
    }
});
