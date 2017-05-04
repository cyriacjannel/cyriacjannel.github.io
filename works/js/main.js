jQuery('document').ready(function($){
	if ($(this).scrollTop() > 1) {
		$('.main-header_nav').addClass('scroll');
	} else {
		$('.main-header_nav').removeClass('scroll');
	}
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.main-header_nav').addClass('scroll');
		} else {
			$('.main-header_nav').removeClass('scroll');
		}
	});
});