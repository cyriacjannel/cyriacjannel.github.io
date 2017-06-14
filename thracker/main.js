$(document).ready(function() {

	var percent = $('.tabs_percent');
	var down = false;
	curr = parseInt(percent.text()),
	to = 100;

	/*------------------------------------*\
			$SPEED
	\*------------------------------------*/

	var btnspeed = $('.btn-speed');
	var btnspeedlabel = $('.btn-speed-label');
	var btnspeedloading = $('.btn-speed-loading');

	btnspeed.mousedown(function(e) {
	e.preventDefault();
	counter = window.setInterval(function() {
		$('body').css('background', '#302229');
		percent.css('display', 'block');
		if(curr <= to) {
			percent.text((curr++)+'%');
		} else {
			window.clearInterval(counter);
		}
	}, 60);

	}).mouseup(function(e) {
		$('body').css('background', '');
		clearTimeout(counter);
		clearInterval(percent);
		curr = parseInt(0);
		percent.text(0+'%');
		percent.css('display', 'none');
	});

	btnspeed.on('mouseup', function() {
	btnspeedloading.toggleClass('transition-loading');
	btnspeedlabel.css('opacity', '0.2');
	window.setTimeout(function(){
		btnspeedloading.toggleClass('transition-loading');
	}, 200);
	window.setTimeout(function(){
		btnspeedlabel.css('opacity', '1');
	}, 20200);
	})

	/*------------------------------------*\
			$HARD
	\*------------------------------------*/

	var btnhard = $('.btn-hard');
	var btnhardlabel = $('.btn-hard-label');
	var btnhardloading = $('.btn-hard-loading');

	btnhard.mousedown(function(e) {
	e.preventDefault();
	counter = window.setInterval(function() {
		$('body').css('background', '#302229');
		percent.css('display', 'block');
		if(curr <= to) {
			percent.text((curr++)+'%');
		} else {
			window.clearInterval(counter);
		}
	}, 160);

	}).mouseup(function(e) {
		$('body').css('background', '');
		clearTimeout(counter);
		clearInterval(percent);
		curr = parseInt(0);
		percent.text(0+'%');
		percent.css('display', 'none');
	});

	btnhard.on('mouseup', function() {
	btnhardloading.toggleClass('transition-loading');
	btnhardlabel.css('opacity', '0.2');
	window.setTimeout(function(){
		btnhardloading.toggleClass('transition-loading');
	}, 200);
	window.setTimeout(function(){
		btnhardlabel.css('opacity', '1');
	}, 60200);
	})

	/*------------------------------------*\
			$FIREWALL
	\*------------------------------------*/

	var btnfirewall = $('.btn-firewall');
	var btnfirewalllabel = $('.btn-firewall-label');
	var btnfirewallloading = $('.btn-firewall-loading');

	btnfirewall.on('mouseup', function() {
	btnfirewallloading.toggleClass('transition-loading');
	btnfirewalllabel.css('opacity', '0.2');
	window.setTimeout(function(){
		btnfirewallloading.toggleClass('transition-loading');
	}, 200);
	window.setTimeout(function(){
		btnfirewalllabel.css('opacity', '1');
	}, 60200);
	});

	/*------------------------------------*\
			$BROU
	\*------------------------------------*/

	var btnbrouilleur = $('.btn-brouilleur');
	var btnbrouilleurlabel = $('.btn-brouilleur-label');
	var btnbrouilleurloading = $('.btn-brouilleur-loading');

	btnbrouilleur.on('mouseup', function() {
	btnbrouilleurloading.toggleClass('transition-loading');
	btnbrouilleurlabel.css('opacity', '0.2');
	window.setTimeout(function(){
		btnbrouilleurloading.toggleClass('transition-loading');
	}, 200);
	window.setTimeout(function(){
		btnbrouilleurlabel.css('opacity', '1');
	}, 120200);
	})

});