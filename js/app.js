$('#slider_tips').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrow: false,
    responsive: [
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
  
  