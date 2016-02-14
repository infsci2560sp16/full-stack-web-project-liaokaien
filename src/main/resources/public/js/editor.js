var EditorView = require('./view/EditorView.js'),
    MessageView = require('./view/MessageBoard-View.js'),
    $ = require('jquery');


new MessageView({
    model:{
        editor: new EditorView({
            model:{
                commentList: []
            }
        })
    }
});

$('#comments_container').on('click', '.btn_close', function(){
    $('#comments_container').removeClass('display');
    $('#message_board').removeClass('blur');
});
