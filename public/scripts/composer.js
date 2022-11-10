$(document).ready(function () {
  // default hide button
  $(".to-top").hide();

  // function to show button if user scrolls 100 pixels
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".to-top").fadeIn();
    } else {
      $(".to-top").fadeOut();
    }
  });

  // function to take user back to the top after clicking the button
  $(".to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
