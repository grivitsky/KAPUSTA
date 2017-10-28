$( document ).ready(function() {
    var height = $("div.contacts").outerHeight();
    var width = $(window).width()/2-15;

    $("#map").css("height",height);
    $("#map").css("width",width);
});

$( window ).resize(function() {
    var height = $("div.contacts").outerHeight();
    var width = $(window).width()/2-15;
    
    $("#map").css("height",height);
    $("#map").css("width",width);
});