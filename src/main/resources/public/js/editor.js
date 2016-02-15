var EditorView = require('./view/EditorView.js'),
    MessageView = require('./view/MessageBoard-View.js'),
    CommentsModel = require('./model/Comments-Model.js'),
    $ = require('jquery');


new MessageView({
    model:{
        editor: new EditorView({
            model: new CommentsModel({
                commentsList: new CommentsModel()
            })
        })
    }
});

$('#comments_container').on('click', '.btn_close', function(){
    $('#comments_container').removeClass('display');
    $('#message_board').removeClass('blur');
});
