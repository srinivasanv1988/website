//SMOOTH TOP DOWN SCROLLING

//Mobile Only Navigation Scroll
$(document).ready(function() {

    $(".scroll-link").click(function() {
        var ScrollOffset = $(this).attr('data-soffset');
        //alert(ScrollOffset);
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

});

//Desktop Navigation Scroll
$(document).ready(function() {

    $(function() {
    $('.links a').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});

});
