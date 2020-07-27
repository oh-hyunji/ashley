$(document).ready(function(){
    var docWidth = $('html,body').width();
    $('#subHeaderBox').width(docWidth);

    $( window ).resize( function() {
        var docWidth = $('html,body').width();
        $('#subHeaderBox').width(docWidth);
    });
});