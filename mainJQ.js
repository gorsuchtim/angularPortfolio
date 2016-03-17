$(document).ready(function() {

	var menuFade = function() {
		$('.menuButton').on('click', function() {
			$(this).fadeOut();
			$('#mobileNavContainer').fadeIn();
			$('.mobileMenuClose').fadeIn();
		});

		$('.mobileMenuClose').on('click', function() {
			$(this).fadeOut();
			$('#mobileNavContainer').fadeOut();
			$('.menuButton').fadeIn();
		});

		$('.mobileNavLink').on('click', function() {
			$('#mobileNavContainer').fadeOut('fast');
			$('.menuButton').fadeIn();
		});

	 }();
	 
	 $('#mobileNavContainer').hide();

}); // end document.ready
