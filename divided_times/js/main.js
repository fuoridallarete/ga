$(function() {

  $(".nav-item").on("click", function(event) {
    event.preventDefault();
    $(".nav-content").removeClass("active");
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#politics").on("click", function() {
    $("#politics-content").addClass("active");
  });

  $("#international").on("click", function() {
    $("#international-content").addClass("active");
  });

  $("#business").on("click", function() {
    $("#business-content").addClass("active");
  });

});
