$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.navbar').addClass("whiteTheme");
            $(".logo").addClass("blackTheme")
            $(".links a").addClass("blackTheme")
        } else {
            $('.navbar').removeClass("whiteTheme");
            $(".logo").removeClass("blackTheme")
            $(".links a").removeClass("blackTheme")
        }
    });
});