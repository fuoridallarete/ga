$(function() {
  scrapeReddit("http://www.reddit.com/r/music/hot.json", $('.music'));
  scrapeReddit("http://www.reddit.com/r/london/hot.json", $('.london'));
  scrapeReddit("http://www.reddit.com/r/pics/hot.json", $('.pics'));
});

var scrapeReddit = function(subreddit, element) {

  $.getJSON(subreddit, function(response) {

    $.each(response.data.children, function(index, story) {
      var item = $("<li>").appendTo(element);
      var link = $("<a href='" + story.data.url + "'>" + story.data.title + "</a>").appendTo(item);
      link.after("<p>Upvotes: " + story.data.ups + ". Downvotes: " + story.data.downs + "</p>");
    });

  });

};
