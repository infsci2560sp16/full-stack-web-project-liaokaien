var EditorView = require('./view/EditorView.js'),
    MessageView = require('./view/MessageBoard-View.js'),
    $ = require('jquery');


new EditorView();
new MessageView();

$('#comments_container').on('click', '.btn_close', function(){
    $('#comments_container').removeClass('display');
    $('#message_board').removeClass('blur');
});
