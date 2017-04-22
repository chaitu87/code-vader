$(function() {
    console.log(window.innerHeight);
    var windowsize = $('.CodeMirror');
    windowsize.css('height', window.innerHeight - 70);
});