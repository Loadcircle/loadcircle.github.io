$(document).ready(function(){

    $('.qph_item').click(function(){
    $('.qph_item').removeClass('active');
    $(this).addClass('active');
    
    $('.active_qph > div').removeClass('active');
    $('.active_qph .'+ $(this).data().target).addClass('active');
});


$('.ver_mas_btn').click(function(){

    $('.ver_mas_btn').text('+')
    $('.pregunta_item').removeClass('active');
    if($(this).hasClass('active')){
      $(this).parent().parent().parent().removeClass('active');
      $(this).removeClass('active');
    }else{
      $(this).parent().parent().parent().addClass('active');
      $(this).text('-');
      $(this).addClass('active');
    }
  




});

var lack_preguntas = 0;
$('.preguntas .pink_btn').click(function(){
  if(lack_preguntas == 0){

    for(var i = 4; i <= ($('.pregunta_item').length-4); i++ ){
      $('.pregunta_item').eq(i).delay((250*i)).fadeIn(700);
    }
    lack_preguntas = 1;
  }else{    
    for(var i = 8; i <= ($('.pregunta_item').length); i++ ){
      $('.pregunta_item').eq(i).delay((100*i)).fadeIn(700);

    }
    $('.preguntas .pink_btn').addClass('unseen_btn')
  }
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







$('#slick_home').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  autoplay: true,
  autoplaySpeed: 4000,
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
          slidesToShow: 1
        }
      },
    ]
  }); 
  
  $('#slick_home').on('beforeChange', function(event, slick, currentSlide, nextSlide){

    if(nextSlide == 1){
      $('.trama_rosa.float_home').addClass('go_blue');
      $('header nav').addClass('force_pink');
    }else{
      $('.trama_rosa.float_home').removeClass('go_blue');
      $('header nav').removeClass('force_pink');
    }
    
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
      
      if($(window).scrollTop() > $('#que_puedo_hacer').offset().top){
        $('header nav').removeClass('active');
      }else{
        $('header nav').addClass('active');
      }

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


      var disable_latop = 0;
      var disable_telefono = 0;
      var disable_modulo = 0;

      $('.pd_item.laptop').mouseenter(function(){
        var pds = $(this).find('.counter_numer');
        if(disable_latop == 0){
          pds.each(function(){  
            var $this = $(this);  
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 1700,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });
        }
        disable_latop = 1;        
      });
      $('.pd_item.telefono').mouseenter(function(){
        var pds = $(this).find('.counter_numer');
        if(disable_telefono == 0){
          pds.each(function(){  
            var $this = $(this);  
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 1700,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });
        }
        disable_telefono = 1;        
      });
      $('.pd_item.modulo').mouseenter(function(){
        var pds = $(this).find('.counter_numer');
        if(disable_modulo == 0){
          pds.each(function(){  
            var $this = $(this);  
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 1700,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });
        }
        disable_modulo = 1;        
      });

      
  });