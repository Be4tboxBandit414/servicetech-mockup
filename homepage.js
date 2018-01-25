$(function() {
  var $root = $('html, body');

  $('.navbar div > a').click(function() {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 139
    }, 900);

    return false;
  });

  $('.slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.second-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true
  });



}); //End of JS
