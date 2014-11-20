/*document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});*/
$(document).ready(function() {
  console.log('hey');

  //listen to click of trigger
  $('#trigger').on('click',function() {
     $('nav ul').toggleClass('slideDown');
  });


});
