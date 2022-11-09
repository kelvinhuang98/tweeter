$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const inputLength = $(this).val().length;
    const count = 140 - inputLength;

    const counter = $(this).parent().find(".counter");
    counter.text(count);
    if (inputLength > 140) {
      counter.css("color", "red");
    } else {
      counter.css("color", "#545149");
    }
  });
});
