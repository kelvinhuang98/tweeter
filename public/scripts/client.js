/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // function responsible for taking in an array of tweet objects and appending each one to the #tweets-container
  const renderTweets = function (tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const tweetElement = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $(".tweets-container").append(tweetElement);
    }
  };

  // function that takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet
  const createTweetElement = function (tweet) {
    return $(`<article class="tweet">
      <header class="tweet-header">
        <div class="tweet-header-user">
          <img src=${tweet.user.avatars} />
          <span>${tweet.user.name}</span>
        </div>
        <span class="tweet-header-handle">${tweet.user.handle}</span>
      </header>
      <p class="tweet-content">${tweet.content.text}</p>
      <footer class="tweet-footer">
        <p class="tweet-footer-date">${tweet.created_at}</p>
        <div class="tweet-footer-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`);
  };

  // function that uses jQuery to make a request to /tweets and receive the array of tweets as JSON
  const loadTweets = () => {
    $.get("/tweets", (tweets) => {
      renderTweets(tweets);
    });
  };

  loadTweets();

  $("#tweet-form").submit(function (event) {
    // prevent default form submission behaviour
    event.preventDefault();
    // convert submitted form data into a query string
    const newTweet = $(this).serialize();
    // send seralized form data to the server
    $.post("/tweets", newTweet);
  });
});
