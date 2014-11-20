$(document).ready(function() {
  var body = $('body');//to do not repat body everytime
   //$('body').();
   //$('grey')call tag=grey; not right
   $('#grey').on('click', function() {
    $('body').css('background', 'grey').css('color', 'white');
    //this is CHAINING
    $(this).css('border-color', 'pink'); //this is referred to #grey
   });

   $('#blue').on('click', function() {
    $('body').css('background', 'blue');
    $('body').css('color', 'white');
   });

   $('#yellow').on('click', function() {
    $('body').css('background', 'yellow');
    $('body').css('color', 'black');
   });

 });
//=== shorthand: $(function) {};

/*$(document).ready(function() {

  var body = $("#background");

  $("#grey").on("click", function() {
    body.css("background", "grey");
    body.css("color", "white");
  });

  $("#blue").on("click", function() {
    body.css("background", "blue");
    body.css("color", "white");
  });

  $("#yellow").on("click", function() {
    body.css("background", "yellow");
    body.css("color", "black");
  });

});*/
