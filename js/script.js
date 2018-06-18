$(function() {
    var inputGroup = $(".input-group-file"),
        input = inputGroup.find("input"),
        button = inputGroup.find("button"),
        label = inputGroup.find("div > div");

    button.focus(function(){
        input.focus()
    });

    input.focus(function(){
        input.addClass("focus");
    }).blur(function(){
        input.removeClass("focus");
    });

    var fileApi = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    input.change(function(){
        var fileName;
        if (fileApi && input[ 0 ].files[ 0 ]) {
            fileName = input[ 0 ].files[ 0 ].name;
        }
        else {
            fileName = input.val().replace( "C:\\fakepath\\", '' );
        }

        if (!fileName.length )
            return;

        if (label.is(":visible")) {
            label.text(fileName);
        } else {
            button.text(fileName);
        }
    }).change();

});
$(window).resize(function(){
    $(".input-group-file input").triggerHandler("change");
});