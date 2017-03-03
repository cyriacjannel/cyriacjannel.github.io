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
	if ($(window).width() < 500) {
		$(".main-header_wrap").click(function() {
			$(this).toggleClass('active');
			$(".main-header_nav").toggleClass('active');
		})
		$(".main-header_nav a").click(function() {
			$(".main-header_nav").toggleClass('active');
			$(".main-header_wrap").toggleClass('active');
		})
	} else {
		$(".main-header_nav").removeClass('active');
		$(".main-header_wrap").removeClass('active');
	}
	$(window).resize(function() {
		if ($(window).width() < 500) {
			$(".main-header_wrap").click(function() {
				$(this).toggleClass('active');
				$(".main-header_nav").toggleClass('active');
			})
			$(".main-header_nav a").click(function() {
				$(".main-header_nav").toggleClass('active');
				$(".main-header_wrap").toggleClass('active');
			})
		} else {
			$(".main-header_nav").removeClass('active');
			$(".main-header_wrap").removeClass('active');
		}
	});
});