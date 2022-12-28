export const setting2 = {
    // dots: true,
    // infinite: true,
    speed: 1500,
    slidesToShow: 9,
    slidesToScroll: 1,
    // autoplay:true,
    // autoplaySpeed:1500
    responsive:[
        {
          breakpoint: 1135,
          settings: {
            slidesToShow: 7.4,
            slidesToScroll: 1,
            infinite: true,
            // dots: true,
            // autoplay:true,
            // autoplaySpeed:1000
          }
        },
        {
          breakpoint:957,
          settings:{
            slidesToShow:6.5,
            slidesToScroll:1,
            infinite: true,
            // autoplay:true,
            // autoplaySpeed:1000,
            // arrows:false
  
          }
        },
        {
          breakpoint:782,
          settings:{
            slidesToShow:4.5,
            slidesToScroll:1.3,
            infinite: true,
            // autoplay:true,
            // autoplaySpeed:1000,
            // arrows:false
  
          }
        },
        {
          breakpoint:519,
          settings:{
            slidesToShow:3.5,
            slidesToScroll:1,
            infinite: true,
            // autoplay:true,
            // autoplaySpeed:1000,
            // arrows:false
  
  
          }
        },
        {
          breakpoint:489,
          settings:{
            slidesToShow:2.3,
            slidesToScroll:1,
            infinite:false,
            // autoplay:true,
            // autoplaySpeed:1000,
            // arrows:false
  
  
          }
        }
      ]
  };