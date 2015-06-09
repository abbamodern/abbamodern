$(document).ready(function(){

	function simpleParallax() {
	    var scrolled = $(window).scrollTop() + 1;

	    $('.scroll').css('background-position', '0' + -(scrolled * .1) + 'px');
	}

	$(window).scroll(function (e) {
	    simpleParallax();
	});

	

	$("#first-circle").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#idk").offset().top - 100},
	        'slow');
	});

	$("#second-circle").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#idk-2").offset().top - 100},
	        'slow');
	});

});