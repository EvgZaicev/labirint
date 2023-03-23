let likes = document.querySelectorAll('.like')
likes.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('liked')
  })
});


$(document).ready(function () {
  $('.slider').slick({
    infinite: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: $('.slick-custom-prev'),
    nextArrow: $('.slick-custom-next'),
    responsive: [
      // {
      //   breakpoint: 1440,
      //   settings: {
      //     slidesToShow: 5,
      //     slidesToScroll: 5,
      //   }
      // },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });
});