$(document).ready(function() {

    $('.aboutinfo').addClass( "max" );
    $('.mininfo').addClass( "max" );
    $(".minlanginfo").addClass( "max" );
    $(".fullscreen").addClass( "max" );
    
    $(".max").css({'height':$(window).height() + 'px'});
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('.navbar').addClass("whiteTheme");
            $(".logo").addClass("blackTheme")
            $(".links a").addClass("blackTheme")
            $(".max").css({'height':'500px'});
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
        $(".max").css({'height':$(window).height() + 'px'});
    });
    
    VANTA.CELLS({
        el: ".aboutinfo",
        mouseControls:false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x31d9d9,
        color2: 0x6e6d6d,
        size: 0.70
        })

    VANTA.TRUNK({
        el: ".minlanginfo",
        mouseControls:false,
        touchControls:false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        spacing: 5.00
        })
    
});
