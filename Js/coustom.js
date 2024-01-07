

$(window).scroll(function(){
    $scroll_top = $(this).scrollTop();
    if($scroll_top > 150){
        $('nav').addClass("scroll_bg");
    }else{
        $('nav').removeClass("scroll_bg");
    }

    })

// <!-- client -->
    
    $('.client_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows:false
        

      });





