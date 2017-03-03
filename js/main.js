jQuery("document").ready(function($){
	if ($(window).scrollTop() < $("#hey").height() - 40) {
		$(".main-header_nav-hey").addClass("current");
		$(".main-header_nav-about").removeClass("current");
		$(".main-header_nav-works").removeClass("current");
		$(".main-header_nav-contact").removeClass("current");
	} else  if ($(window).scrollTop() < $("#hey").height() + $("#about").height() - 40) {
		$(".main-header_nav-hey").removeClass("current");
		$(".main-header_nav-about").addClass("current");
		$(".main-header_nav-works").removeClass("current");
		$(".main-header_nav-contact").removeClass("current");
	} else  if ($(window).scrollTop() < $("#hey").height() + $("#about").height() + $("#works").height() - 40) {
		$(".main-header_nav-hey").removeClass("current");
		$(".main-header_nav-about").removeClass("current");
		$(".main-header_nav-works").addClass("current");
		$(".main-header_nav-contact").removeClass("current");
	} else {
		$(".main-header_nav-hey").removeClass("current");
		$(".main-header_nav-about").removeClass("current");
		$(".main-header_nav-works").removeClass("current");
		$(".main-header_nav-contact").addClass("current");
	}
	$(window).scroll(function () {
		if ($(window).scrollTop() < $("#hey").height() - 40) {
			$(".main-header_nav-hey").addClass("current");
			$(".main-header_nav-about").removeClass("current");
			$(".main-header_nav-works").removeClass("current");
			$(".main-header_nav-contact").removeClass("current");
		} else  if ($(window).scrollTop() < $("#hey").height() + $("#about").height() - 40) {
			$(".main-header_nav-hey").removeClass("current");
			$(".main-header_nav-about").addClass("current");
			$(".main-header_nav-works").removeClass("current");
			$(".main-header_nav-contact").removeClass("current");
		} else  if ($(window).scrollTop() < $("#hey").height() + $("#about").height() + $("#works").height() - 40) {
			$(".main-header_nav-hey").removeClass("current");
			$(".main-header_nav-about").removeClass("current");
			$(".main-header_nav-works").addClass("current");
			$(".main-header_nav-contact").removeClass("current");
		} else {
			$(".main-header_nav-hey").removeClass("current");
			$(".main-header_nav-about").removeClass("current");
			$(".main-header_nav-works").removeClass("current");
			$(".main-header_nav-contact").addClass("current");
		}
	});
	if ($(window).scrollTop() > 1) {
		$(".main-header_nav").addClass("scroll");
	} else {
		$(".main-header_nav").removeClass("scroll");
	}
	$(window).scroll(function () {
		if ($(window).scrollTop() > 1) {
			$(".main-header_nav").addClass("scroll");
		} else {
			$(".main-header_nav").removeClass("scroll");
		}
	});
	if ($(window).width() < 500) {
		$(".main-header_wrap").click(function() {
			$(this).toggleClass("active");
			$(".main-header_nav").toggleClass("active");
		})
		$(".main-header_nav a").click(function() {
			$(".main-header_nav").toggleClass("active");
			$(".main-header_wrap").toggleClass("active");
		})
	} else {
		$(".main-header_nav").removeClass("active");
		$(".main-header_wrap").removeClass("active");
	}
	$(window).resize(function() {
		if ($(window).width() < 500) {
			$(".main-header_wrap").click(function() {
				$(".main-header_wrap").toggleClass("active");
				$(".main-header_nav").toggleClass("active");
			})
			$(".main-header_nav a").click(function() {
				$(".main-header_nav").toggleClass("active");
				$(".main-header_wrap").toggleClass("active");
			})
		} else {
			$(".main-header_nav").removeClass("active");
			$(".main-header_wrap").removeClass("active");
		}
	});
});