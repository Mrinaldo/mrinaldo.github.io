jQuery(document).ready(function($) {
	$('#button').click(function(){
		$(this).toggleClass('button_on');
		$('#navigation').toggleClass('nav_toggle');
	});
});
$(window).on("load", function() { 
	$(".loader").fadeOut('slow');
});