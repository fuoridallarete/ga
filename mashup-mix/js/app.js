$( document ).ready(function() {

	var trigger = $(".menu-trigger");
	var nav = $("nav#menu-nav");

	// hover on trigger - display half menu
	trigger.mouseover(function() {
		nav.addClass("menu-open-part");
	});

	trigger.mouseout(function(){
		nav.removeClass("menu-open-part");
	});

	// hover over icon - show full item list
	nav.mouseover(function() {
		nav.addClass("menu-open-all");
	});

	// mouse out, hide menu
	nav.mouseout(function() {
		nav.removeClass("menu-open-all");
	});

	// click on trigger, show full menu
	trigger.click(function() {
		nav.toggleClass("menu-open-all");
	})


});