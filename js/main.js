$(document).ready(function($) {
	
	var pull = $("#navigation__toggle");
	var nav = $("#navigation__items");

	$(pull).on('click', function(e) {
		e.preventDefault();		
		$(nav).slideToggle();
		$(this).toggleClass('navigation__toggle-button--active');
	});

	$(window).resize(function() {
		var w = $(window).width();
		if(w > 992) {
			nav.removeAttr('style');
		}
	});

});