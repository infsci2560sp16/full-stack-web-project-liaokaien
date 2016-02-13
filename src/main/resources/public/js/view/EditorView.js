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
        'click .gutter_comment': 'showComment',
        'click .gutter_comment .btn_close': 'hideComment'

    },
    initialize: function(){
        this.render();
    },
    render: function(){
        var fetchUrl = baseUrl + '/document/123/comments';
        var self = this;
        $.getJSON(fetchUrl, function(data){
            // Store the comments data; May use Model object to manage it later.
            self.commentList = data;
            self.$el.append(self.template({lines: data}));
            var textArea = document.getElementById('code_mirror');
            var options = {
                value: "mode = 'javascript'",
                mode:"javascript",
                lineNumbers: true,
                theme: 'pastel-on-dark'
            };
            window.cm = CodeMirror.fromTextArea(textArea, options);
            window.widgetFac = function(){
                var widget = document.createElement('div');
                widget.classList.add('widget');
                return widget;
            };
            // cm.setValue(new content);
            console.log($('.CodeMirror-code').height());
        });
    },

    showComment: function(event){
        var target = event.currentTarget;
        var lineNumber = target.dataset.line;
        if(typeof lineNumber !== 'number'){
            lineNumber = parseInt(lineNumber);
        }
        var template = _.template($('#comment_box_template').html());
        if(this.commentList[lineNumber].length === 0) return;
        var commentBoxContent = template({comments:this.commentList[lineNumber]});
        $('#comments_container').html(commentBoxContent).addClass('display');
    },

    hideComment: function(){
        $('#comments_container').removeClass('display');
    }

});
