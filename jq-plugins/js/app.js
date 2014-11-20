
$(document).ready(function(){
   /*copy from Scrolld 3.Place this script trigger function in
   the bottom of on your page body to turn on the plugin.*/
   $("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();
   $(this).scrolld();});/*to make the scroll, when u click the btn scrolled the section vith
that id will scroll*/



//fitVids
$("body").fitVids();

//Flexslider
  $('.flexslider').flexslider({
    animation: "slide"
  });


});

