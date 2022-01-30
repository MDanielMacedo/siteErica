$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });
});