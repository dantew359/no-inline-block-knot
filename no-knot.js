(function( $ ) {
	$.fn.nknot = function() {
		var that = $(this);
		var allIb  = $(this).children();
		allIb.each(function () {
			$(this).clone().appendTo(that);
			$(this).remove();
		});
	};
})(jQuery);

