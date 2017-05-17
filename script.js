$(function(){
    firstslider();
    productclick();
    toup();
});


function firstslider() {
    $(document).ready(function () {

        var slides = $(".sliderMain .slidess").children(".slideM");
        var width = $(".sliderMain .slidess").width();
        var i = slides.length;
        var offset = i * width;
        var cheki = i - 1;

        $(".sliderMain .slidess").css('width', offset);

        for (j = 0; j < slides.length; j++) {
            if (j == 0) {
                $(".sliderMain .navigation").append("<div class='dot active'></div>");
            }
            else {
                $(".sliderMain .navigation").append("<div class='dot'></div>");
            }
        }

        var dots = $(".sliderMain .navigation").children(".dot");
        offset = 0;
        i = 0;

        $('.sliderMain .navigation .dot').click(function () {
            $(".sliderMain .navigation .active").removeClass("active");
            $(this).addClass("active");
            i = $(this).index();
            offset = i * width;
            $(".sliderMain .slidess").css("transform", "translate3d(-" + offset + "px, 0px, 0px)");
        });
    });
}
function productclick() {

    $('.product').mouseover(function(e) {
        console.log(e.currentTarget.children[3].style.display='block');
    });


    $('.product').mouseout(function() {
        $(".product>.productplus").css({
            "display" : "none"
        });

    });
}
function toup() {

    $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() != 0) {

                $('.to-up').fadeIn();

            } else {

                $('.to-up').fadeOut();

            }

        });

        $('.to-up').click(function() {

            $('body,html').animate({scrollTop:0},800);

        });

    });
}