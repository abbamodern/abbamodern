$(document).ready(function(){

	// function simpleParallax() {
	//     var scrolled = $(window).scrollTop() + 1;

	//     $('.scroll').css('background-position', '0' + -(scrolled * .1) + 'px');
	// }

	// $(window).scroll(function (e) {
	//     simpleParallax();
	// });



	$("#first-circle").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#home").offset().top},
	        'slow');
	});

	$("#second-circle").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#about").offset().top},
	        'slow');
	});

});