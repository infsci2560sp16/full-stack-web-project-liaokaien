var Backbone = require('backbone'),
    CodeMirror = require('../lib/codemirror.js'),
    $ = require('jquery'),
    _ = require('underscore'),
    config = require('../config.js');

var baseUrl = config.baseUrl;

// Load mode and addon
require('../mode/javascript/javascript.js');
require('../lib/panel.js');

module.exports = Backbone.View.extend({
    el: '#editor_panel',
    template: _.template($('#editor_panel_template').html()),
    events: {
        'click .gutter_comment' : 'showComment'
    },
    initialize: function(){
        var fetchUrl = baseUrl + '/document/123/comments';
        var self = this;
        this.render();
        var textArea = document.getElementById('code_mirror');
        var options = {
            value: "mode = 'javascript'",
            mode:"javascript",
            lineNumbers: true,
            theme: 'pastel-on-dark'
        };
        window.cm = CodeMirror.fromTextArea(textArea, options);
        // cm.setValue(new content);

        // Load comments
        $.getJSON(fetchUrl, function(data){
            // Store the comments data; May use Model object to manage it later.
            self.model.set({commentsList : data});
            self.renderGutters();
        });
    },
    render: function(){
        this.$el.append(this.template());
    },

    renderGutters: function(){
        var gutterTemplate = _.template($('#gutter_container_template').html());
        this.$el.find('#gutter_container').html(gutterTemplate({
            lines: this.model.get('commentsList')
        }));
    },
    showComment: function(event){
        var target = event.currentTarget;
        var lineNumber = target.dataset.line;
        if(typeof lineNumber !== 'number'){
            lineNumber = parseInt(lineNumber);
        }
        var template = _.template($('#comment_box_template').html());
        if(this.model.get('commentsList')[lineNumber].length === 0) return;
        var commentBoxContent = template({comments:this.model.get('commentsList')[lineNumber]});
        $('#message_board').addClass('blur');
        $('#comments_container').html(commentBoxContent).addClass('display').css({
            top: (((lineNumber*1.5)+0.5) + 'rem')
        });
        if(lineNumber === 0){
            $('#comments_container').css({'margin-top':'-8px'});
        }else{
            $('#comments_container').css({'margin-top':'0px'});
        }
    }

});
