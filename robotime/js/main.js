/*------------------------------------*\
		JQUERY XEYES BY FELIX MILEA-CIOBANU
\*------------------------------------*/

(function($) {
	"use strict";
	var defaultOptions = {
		padding: 0,
		reset: false,
		radius: 'natural',
		position: 'center',
		trigger: window
	};
	var positions = {
		top: 90,
		bottom: -90,
		left: 180,
		right: 0,
		topRight: 45,
		topLeft: 135,
		bottomRight: -45,
		bottomLeft: -135
	};
	function Iris($iris) {
		this.$iris = $iris;
		$iris.css('position', 'absolute');
		this.width  = $iris.outerWidth();
		this.height = $iris.outerHeight();
		this.resetOffset = function() {
			var offset = $iris.offset();
			this.offset = {
				x: offset.left + (this.width / 2) - parseInt($iris.css("left")),
				y: offset.top + (this.height / 2) - parseInt($iris.css("top"))
			};
		};
	}
	function Eye($eye, $iris) {
		this.$eye = $eye;
		$eye.css('position', 'relative');
		this.width  = $eye.width();
		this.height = $eye.height();
		this.iris   = new Iris($iris);
		this.pos = {
			x: (this.width - this.iris.width) / 2,
			y: (this.height - this.iris.height) / 2
		};
		$iris.css("left", this.pos.x + "px").css("top", this.pos.y + "px");
		this.padding = 0;
	}
	Eye.prototype.follow = function(mouse) {
		mouse.x = mouse.x - this.pos.x;
		mouse.y = mouse.y - this.pos.y;
		this.iris.resetOffset();
		var degree = Math.atan(( mouse.y - this.iris.offset.y) / ( mouse.x - this.iris.offset.x)),
		direction = (this.iris.offset.x > mouse.x) ? -1 : 1,
		newX = Math.cos(degree) * ((this.width - this.iris.width) / 2 - this.padding) * direction,
		newY = Math.sin(degree) * ((this.height - this.iris.height) / 2 - this.padding) * direction,
		radius = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2)),
		distance = Math.sqrt(Math.pow(mouse.y - this.iris.offset.y, 2) + Math.pow(mouse.x - this.iris.offset.x, 2));
		if (radius > distance) {
			this.iris.$iris.css("left", ( mouse.x - this.iris.offset.x + this.pos.x) + "px").css("top", (mouse.y - this.iris.offset.y + this.pos.y) + "px");
		} else {
			this.iris.$iris.css("left", this.pos.x + newX + "px").css("top", this.pos.y + newY + "px");
		}
	};
	Eye.prototype.setPosition = function(position) {
		if (position.x !== undefined && position.y !== undefined) {
			this.iris.$iris.css("left", this.pos.x - position.x + "px").css("top", this.pos.y - position.y + "px");
		} else if (typeof position === "number") {
			var deg = position * Math.PI / -180;
			this.iris.$iris.css("left", this.pos.x + Math.cos(deg) * (this.width / 2 - this.iris.width / 2 - this.padding) + "px").css("top", this.pos.y + Math.sin(deg) * (this.height / 2 - this.iris.height / 2 - this.padding) + "px");
		} else if (position === "center") {
			this.iris.$iris.css("left", this.pos.x + "px").css("top", this.pos.y + "px");
		} else if (positions[position] !== undefined) {
			var deg2 = positions[position] * Math.PI / -180;
			this.iris.$iris.css("left", this.pos.x + Math.cos(deg2) * (this.width / 2 - this.iris.width / 2 - this.padding) + "px").css("top", this.pos.y + Math.sin(deg2) * (this.height / 2 - this.iris.height / 2 - this.padding) + "px");
		}
	};
	$.fn.xeyes = function(options) {
		options = $.extend(defaultOptions, options);
		var padding = parseInt(options.padding, 10);
		var $trigger = $(options.trigger);
		this.each(function(index, irisEl) {
			var $iris = $(irisEl),
			$eye = $iris.parent();
			var eye = new Eye($eye, $iris);
			var iris = eye.iris;
			eye.padding = padding;
			if (options.radius == 'circular' && eye.width > eye.height)
				eye.width = eye.height;
			else if (options.radius == 'circular')
				eye.height = eye.width;
			eye.setPosition(options.position);
			$trigger.mousemove(function(e) {
				eye.follow({ x: e.pageX, y: e.pageY });
			});
			if (options.reset) {
				$trigger.mouseleave(function(e) {
					eye.setPosition(options.position);
				});
			}
		});
	};
})(jQuery);




/*------------------------------------*\
		ROBOTIME
\*------------------------------------*/

$(document).ready(function() {
	$('.iris').xeyes();
	setInterval(function() {
		var h = new Date().getHours();
		var m = new Date().getMinutes();
		var mo = new Date().getMonth();
		var s = new Date().getSeconds();

	/*------------------------------------*\
			$SKY
	\*------------------------------------*/

		var bodyn = $('.body-night');
		var ctntitle = $('.container-title');
		var title = $('.title');
		if (h < 6 || h > 22) {
			bodyn.css('background-color', 'rgba(28, 3, 46, 1)');
		} else if (h < 7 || h > 21) {
			bodyn.css('background-color', 'rgba(28, 3, 46, 0.8)');
		} else if (h < 8 || h > 20) {
			bodyn.css('background-color', 'rgba(28, 3, 46, 0.6)');
		} else if (h < 9 || h > 19) {
			bodyn.css('background-color', 'rgba(28, 3, 46, 0.4)');
		} else if (h < 10 || h > 18) {
			bodyn.css('background-color', 'rgba(28, 3, 46, 0.2)');
		} else {
			bodyn.css('background-color', 'rgba(28, 3, 46, 0)');
		};
		if (h < 8 || h > 20) {
			ctntitle.css('color', '#fbfcfc');
			title.css('border', 'solid 8px #fbfcfc');
		} else {
			ctntitle.css('color', '');
			title.css('border', '');
		};


	/*------------------------------------*\
			$INDICATOR
	\*------------------------------------*/

		var inds1 = $('.indicator-s1');
		var inds2 = $('.indicator-s2');
		var inds3 = $('.indicator-s3');
		var inds4 = $('.indicator-s4');
		var inds5 = $('.indicator-s5');
		var inds6 = $('.indicator-s6');
		var inds00 = $('.indicator-s00');
		var inds20 = $('.indicator-s20');
		var inds40 = $('.indicator-s40');
		if (s == 0) {
			inds1.css('background-color', '');
			inds2.css('background-color', '');
			inds3.css('background-color', '');
			inds4.css('background-color', '');
			inds5.css('background-color', '');
			inds6.css('background-color', '');
			inds00.css('background-color', '');
			inds20.css('background-color', '');
			inds40.css('background-color', '');
		};
		if (s > 0) {
			inds1.css('background-color', '#db473a');
		};
		if (s > 10) {
			inds2.css('background-color', '#db473a');
		};
		if (s > 20) {
			inds3.css('background-color', '#db473a');
		};
		if (s > 30) {
			inds4.css('background-color', '#db473a');
		};
		if (s > 40) {
			inds5.css('background-color', '#db473a');
		};
		if (s > 50) {
			inds6.css('background-color', '#db473a');
		};
		if (s > 0) {
			inds00.css('background-color', '#bd3d32');
		};
		if (s > 20) {
			inds20.css('background-color', '#bd3d32');
		};
		if (s > 40) {
			inds40.css('background-color', '#bd3d32');
		};
		var indm1 = $('.indicator-m1');
		var indm2 = $('.indicator-m2');
		var indm3 = $('.indicator-m3');
		var indm4 = $('.indicator-m4');
		var indm5 = $('.indicator-m5');
		var indm6 = $('.indicator-m6');
		var indm00 = $('.indicator-m00');
		var indm20 = $('.indicator-m20');
		var indm40 = $('.indicator-m40');
		if (m == 0) {
			indm1.css('background-color', '');
			indm2.css('background-color', '');
			indm3.css('background-color', '');
			indm4.css('background-color', '');
			indm5.css('background-color', '');
			indm6.css('background-color', '');
			indm00.css('background-color', '');
			indm20.css('background-color', '');
			indm40.css('background-color', '');
		};
		if (m > 0) {
			indm1.css('background-color', '#22a64e');};
		if (m > 10) {
			indm2.css('background-color', '#22a64e');};
		if (m > 20) {
			indm3.css('background-color', '#22a64e');};
		if (m > 30) {
			indm4.css('background-color', '#22a64e');};
		if (m > 40) {
			indm5.css('background-color', '#22a64e');};
		if (m > 50) {
			indm6.css('background-color', '#22a64e');};
		if (m > 0) {
			indm00.css('background-color', '#197e3b');};
		if (m > 20) {
			indm20.css('background-color', '#197e3b');};
		if (m > 40) {
			indm40.css('background-color', '#197e3b');};
		var indh1 = $('.indicator-h1');
		var indh2 = $('.indicator-h2');
		var indh3 = $('.indicator-h3');
		var indh4 = $('.indicator-h4');
		var indh5 = $('.indicator-h5');
		var indh6 = $('.indicator-h6');
		var indh00 = $('.indicator-h00');
		var indh08 = $('.indicator-h08');
		var indh16 = $('.indicator-h16');
		if (h == 0) {
			indh1.css('background-color', '');
			indh2.css('background-color', '');
			indh3.css('background-color', '');
			indh4.css('background-color', '');
			indh5.css('background-color', '');
			indh6.css('background-color', '');
			indh00.css('background-color', '');
			indh08.css('background-color', '');
			indh16.css('background-color', '');
		};
		if (h > 0) {
			indh1.css('background-color', '#0177aa');
		};
		if (h > 4) {
			indh2.css('background-color', '#0177aa');
		};
		if (h > 8) {
			indh3.css('background-color', '#0177aa');
		};
		if (h > 12) {
			indh4.css('background-color', '#0177aa');
		};
		if (h > 16) {
			indh5.css('background-color', '#0177aa');
		};
		if (h > 20) {
			indh6.css('background-color', '#0177aa');
		};
		if (h > 0) {
			indh00.css('background-color', '#005b82');
		};
		if (h > 8) {
			indh08.css('background-color', '#005b82');
		};
		if (h > 16) {
			indh16.css('background-color', '#005b82');
		};
		var indmo1 = $('.indicator-mo1');
		var indmo2 = $('.indicator-mo2');
		var indmo3 = $('.indicator-mo3');
		var indmo4 = $('.indicator-mo4');
		var indmo5 = $('.indicator-mo5');
		var indmo6 = $('.indicator-mo6');
		var indmo00 = $('.indicator-mo00');
		var indmo04 = $('.indicator-mo04');
		var indmo08 = $('.indicator-mo08');
		if (mo == 0) {
			indmo1.css('background-color', '');
			indmo2.css('background-color', '');
			indmo3.css('background-color', '');
			indmo4.css('background-color', '');
			indmo5.css('background-color', '');
			indmo6.css('background-color', '');
			indmo00.css('background-color', '');
			indmo04.css('background-color', '');
			indmo08.css('background-color', '');
		};
		if (mo > 0) {
			indmo1.css('background-color', '#f0c430');
		};
		if (mo > 2) {
			indmo2.css('background-color', '#f0c430');
		};
		if (mo > 4) {
			indmo3.css('background-color', '#f0c430');
		};
		if (mo > 6) {
			indmo4.css('background-color', '#f0c430');
		};
		if (mo > 8) {
			indmo5.css('background-color', '#f0c430');
		};
		if (mo > 10) {
			indmo6.css('background-color', '#f0c430');
		};
		if (mo > 0) {
			indmo00.css('background-color', '#c8a226');
		};
		if (mo > 4) {
			indmo04.css('background-color', '#c8a226');
		};
		if (mo > 8) {
			indmo08.css('background-color', '#c8a226');
		};


	/*------------------------------------*\
			$BAR
	\*------------------------------------*/

		var btnam = $('.bouton-am');
		var btnpm = $('.bouton-pm');
		var btn2222 = $('.bouton-2222');
		if (h <= 12) {
			btnam.css('background-color', '#005b82');
			btnpm.css('background-color', '');
		} else {
			btnam.css('background-color', '');
			btnpm.css('background-color', '#005b82');
		}
		if (h == 22 && m == 22) {
			btn2222.css('background-color', '#db47c8');
		} else {
			btn2222.css('background-color', '');
		};
		var bars = $('.bar-s');
		var barm = $('.bar-m');
		var barh = $('.bar-h');
		bars.css('width', s * 1.33);
		barm.css('width', m * 1.33);
		barh.css('width', h * 3.33);
	}, 1000);


	/*------------------------------------*\
			$ON/OFF
	\*------------------------------------*/

	var h2 = new Date().getHours();
	var iris = $('.iris');
	var eyeball = $('.eyeball');
	var light = $('.light');
	var btnon = $('.button');
	var btnoff = $('.buttoff');
	var mouth = $('.mouth');
	if (h2 >= 8) {
		btnon.css('background-color', '');
		btnoff.css('background-color', '');
		eyeball.css('background-color', '');
		iris.css('display', '');
		mouth.css('border-radius', '');
		light.css('animation-name', 'blink').css('animation-duration', '0.8s').css('animation-iteration-count', 'infinite');
		var toggleBtnon = function() {
			btnon.css('background-color', '');
			btnoff.css('background-color', '');
			eyeball.css('background-color', '');
			iris.css('display', '');
			mouth.css('border-radius', '');
			light.css('animation-name', 'blink').css('animation-duration', '0.8s').css('animation-iteration-count', 'infinite');
		};
		var toggleBtnoff = function() {
			btnon.css('background-color', '#2ecc71');
			btnoff.css('background-color', '#b53c2e');
			eyeball.css('background-color', '#34495e');
			iris.css('display', 'none');
			mouth.css('border-radius', '30px 30px 0 0');
			light.css('animation-name', '').css('animation-duration', '').css('animation-iteration-count', '');
		};
	} else {
		btnon.css('background-color', '#2ecc71');
		btnoff.css('background-color', '#b53c2e');
		eyeball.css('background-color', '#2c3e50');
		iris.css('display', 'none');
		mouth.css('border-radius', '');
		light.css('animation-name', '').css('animation-duration', '').css('animation-iteration-count', '');
		var toggleBtnon = function() {
			btnon.css('background-color', '');
			btnoff.css('background-color', '');
			eyeball.css('background-color', '');
			iris.css('display', '');
			mouth.css('border-radius', '30px 30px 0 0');
			light.css('animation-name', 'blink').css('animation-duration', '0.8s').css('animation-iteration-count', 'infinite');
		};
		var toggleBtnoff = function() {
			btnon.css('background-color', '#2ecc71');
			btnoff.css('background-color', '#b53c2e');
			eyeball.css('background-color', '#2c3e50');
			iris.css('display', 'none');
			mouth.css('border-radius', '');
			light.css('animation-name', '').css('animation-duration', '').css('animation-iteration-count', '');
		};
	};
	btnon.on('click', toggleBtnon);
	btnoff.on('click', toggleBtnoff);
});