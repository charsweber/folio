// add jquery scroll so that when user scrolls 100px, arrow appears in lower right corner to bring user back to the top of the page
// eg https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_scrolltop_class
// ^ make this transition in opacity from 0 to 0.3
// slow scroll to different sections - https://css-tricks.com/snippets/jquery/smooth-scrolling/
// https://css-tricks.com/svg-line-animation-works/ svg line animation

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".fa-arrow-circle-up").removeClass("hidden");
    } else {
      $(".fa-arrow-circle-up").addClass("hidden");
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});