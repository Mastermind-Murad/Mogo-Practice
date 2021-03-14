
$(function(){
    
//counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
//Feedback Slider
$('.feedback-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:true,
      nextArrow:'.right',
      prevArrow:'.left',
      autoplaySpeed: 2000,
});
		
//Venobox
$('.venobox').venobox(); 
    
//Back-Top
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0}, 3000);
});
    
//Bg
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
      $('.navbar').addClass('bg');
  }
    else{
        $('.navbar').removeClass('bg');
    }
    
    if(scrolling > 200){
      $('.back-top').fadeIn(500);
  }
    else{
        $('.back-top').fadeOut(1000);
    }
    
});
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
//Background Vedio with YT Player
jQuery(".player").YTPlayer();


});