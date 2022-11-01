$(function () {
  $('.bike-slider, .slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true
  });

  $(".menu, .bike__column").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

});