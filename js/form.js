$( "input" ).change(function() {
    var $this = $(this);
    $('html, body').animate({
        scrollTop: $($this).parent().next().offset().top
    }, 400);
});