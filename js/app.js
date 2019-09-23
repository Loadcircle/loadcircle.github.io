$(document).ready(function(){

    $('.qph_item').click(function(){
    $('.qph_item').removeClass('active');
    $(this).addClass('active');
    
    $('.active_qph > div').removeClass('active');
    $('.active_qph .'+ $(this).data().target).addClass('active');
});


$('.ver_mas_btn').click(function(){
    $('.pregunta_item').removeClass('active');
    $(this).parent().parent().addClass('active');
});


$('.preguntas .pink_btn').click(function(){
    for(var i = 4; i <= $('.pregunta_item').length; i++ ){
        if(i == 4){
            $('.pregunta_item').eq(i).fadeIn(700);   
        }else{
            $('.pregunta_item').eq(i).delay((250*i)).fadeIn(700);   
        }
        
    }
    $(this).hide()
});


var video_position = 0;
$('.close_modal').click(function(){
    $('#pop_up_modal').fadeOut()
})

$('.dark_blue_btn ').click(function(){
    $('#pop_up_modal').fadeIn().css('display', 'flex');;
    $('.video_frame > div').hide();
    $('.video_frame > div').eq($(this).data().target).show();
    video_position = $(this).data().target;
});

$('.left_video').click(function(){

    $('.video_frame > div').hide();
    if(video_position != 0){
        $('.video_frame > div').eq(video_position-1).show();
        video_position -= 1;
    }else{        
        $('.video_frame > div').eq(4).show();
        video_position = 4;
    }

});
$('.right_video').click(function(){
    $('.video_frame > div').hide();
    if(video_position != 4){
        $('.video_frame > div').eq(video_position+1).show();
        video_position += 1;
    }else{        
        $('.video_frame > div').eq(0).show();
        video_position = 0;
    }

});









$('#slider_tips').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          arrow: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          arrow: false,
          slidesToShow: 3
        }
      },
    ]
  }); 
  
  $('#slider_tips').on('beforeChange', function(event, slick, currentSlide, nextSlide){

    $('.imgs_tips_items > div').removeClass('active');
    $('.imgs_tips_items > div').eq(nextSlide).addClass('active');
    

  });
  

    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });


    //active a nav scrolls
        
    //Crear un item final para validar
    let last_title = '<div class="titles_box disabled"></div>';
    $('body').append(last_title);
    $(window).scroll(function(){
      let titulo = $('.titles_box');
      
      titulo.each(function(i){
        if(titulo.eq(i).offset().top-(innerHeight*0.7) < window.scrollY &&
          titulo.eq(i+1).offset().top-(innerHeight*0.7) > window.scrollY
          ){          
            $('.nav_item').removeClass('active');
            $('.nav_item').eq(i).addClass('active')         
           }
      });
      
    });





    //Check user agent
    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
            // Windows Phone must come first because its UA also contains "Android"
          if (/windows phone/i.test(userAgent)) {
              return "Windows Phone";
          }
      
          if (/android/i.test(userAgent)) {
              return "Android";
          }
      
          // iOS detection from: http://stackoverflow.com/a/9039885/177710
          if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
              return "iOS";
          }
      
          return "unknown";
      }
      
      var ios_url = 'https://apps.apple.com/pa/app/cineplanet-perú/id523901218';
      var and_url = 'https://play.google.com/store/apps/details?id=com.cineplanet&hl=es_PE';

      if(getMobileOperatingSystem() == 'iOS'){
        $('.web_url').attr('href', ios_url)
      }
     
      
  });