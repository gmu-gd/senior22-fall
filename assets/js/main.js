$(document).ready(function() {
    // run function on initial page load
    clickableDiv();
    nav();
    smoothScroll();
    form();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function form() {
  $('#sub-but').click( function(){
    $('#sp-form').addClass('submitted');
    var slide1 = document.getElementById('gd-skills');
    var slide2 = document.getElementById('gd-understanding');
    var slide3 = document.getElementById('public-speaking');
    if ($(slide1).hasClass("slide-clicked")) {
      console.log("has class");
    } else {
      console.log("does not have class");
      $(slide1).addClass('slide-invalid');
    }
    if ($(slide2).hasClass("slide-clicked")) {
      console.log("has class");
    } else {
      console.log("does not have class");
      $(slide2).addClass('slide-invalid');
    }
    if ($(slide3).hasClass("slide-clicked")) {
      console.log("has class");
    } else {
      console.log("does not have class");
      $(slide3).addClass('slide-invalid');
    }
  });
  $('#gd-skills').click( function(){
    $(this).addClass('slide-clicked');
    $(this).removeClass('slide-invalid');
  });
  $('#gd-understanding').click( function(){
    $(this).addClass('slide-clicked');
    $(this).removeClass('slide-invalid');
  });
  $('#public-speaking').click( function(){
    $(this).addClass('slide-clicked');
    $(this).removeClass('slide-invalid');
  });
}
function clickableDiv() {
  $('.tutorial').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
function nav() {
  $('.mobile-nav').click(function(){
    $('#menu').removeClass('mobile-hide');
    $('body').addClass('scroll-lock');
    $('#menu').click(function(){
      $('#menu').addClass('mobile-hide');
      $('body').removeClass('scroll-lock');
    });
  });
}
function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#poster"], [href*="#kinetic"], [href*="#title"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('body, html').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });
  });
}
