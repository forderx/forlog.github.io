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

    $(".about").on('click', ()=>{
        $(".minlanginfo").css({'right':"-100%"})
        $(".aboutinfo").css({'left':'0%'})
    });
    $(".lang").on('click', ()=>{
        $(".aboutinfo").css({'left':'-100%'})
        $(".minlanginfo").css({'right':"0%"})
    });
    $(".logo").on('click', ()=>{
        $('.aboutinfo').css({'height':'100%'});
        $('.mininfo').css({'height':'100%'});
        $(".minlanginfo").css({"height":'100%'});
    });
});
