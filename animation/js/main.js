$(document).ready(function(){
	var audioplay = document.createElement('audio');
		audioplay.setAttribute('src', 'data/blue.mp3');
	var anim = new TimelineMax({
		onStart:function(){audioplay.play()},
		onComplete:function(){audioplay.pause()},
	});





	/*------------------------------------*\
			$OPACITY1
	\*------------------------------------*/

	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 0.5);
	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 3.3);
	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 3.8);
	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 7);
	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 7.5);
	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 10.8);
	anim.to($("body"), 0.3,{backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 20)'}, 11.3);

	anim.to($(".body"), 0.4,{opacity: 1}, 0.1);
	anim.to($(".head1"), 0.4,{opacity: 1}, 0);
	anim.to($(".left-arm1"), 0.4,{opacity: 1}, 0.1);
	anim.to($(".left-arm2"), 0.4,{opacity: 1}, 0.1);
	anim.to($(".left-arm3"), 0.4,{opacity: 1}, 0.1);
	anim.to($(".right-arm1"), 0.4,{opacity: 1}, 0.1);
	anim.to($(".right-arm2"), 0.4,{opacity: 1}, 0.1);
	anim.to($(".right-arm3"), 0.4,{opacity: 1}, 0.1);





	/*------------------------------------*\
			$INTRO
	\*------------------------------------*/

	anim.to($(".body"), 0.1,{ y:0, ease: Power1.easeOut}, 0.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 0.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 1);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 1.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 1.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 1.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 2);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 2.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 2.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 2.75)
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 3);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 3.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 3.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 3.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 4);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 4.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 4.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 4.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 5.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 5.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 5.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 6);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 6.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 6.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 6.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 7);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 7.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 7.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 7.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 8);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 8.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 8.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 8.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 9);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 9.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 9.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 9.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 10);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 10.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 10.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 10.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 11);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 11.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 11.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 11.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 12);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 12.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 12.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 12.75);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 13);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 13.25);
	anim.to($(".body"), 0.1,{y:0, ease: Power1.easeOut}, 13.5);
	anim.to($(".body"), 0.1,{y:-5, ease: Power1.easeOut}, 13.75);

	anim.to($(".head1"), 0.2,{y:20, ease: Power2.easeOut}, 3.3);
	anim.to($(".head1"), 0.2,{y:-20, ease: Power2.easeOut}, 3.8);
	anim.to($(".head1"), 0.2,{y:20, ease: Power2.easeOut}, 7);
	anim.to($(".head1"), 0.2,{y:-20, ease: Power2.easeOut}, 7.5);
	anim.to($(".head1"), 0.2,{y:20, ease: Power2.easeOut}, 10.8);
	anim.to($(".head1"), 0.2,{y:-20, ease: Power2.easeOut}, 11.3);
	anim.to($(".head1"), 0.1,{rotation: 4, ease: Power2.easeOut}, 13.8);
	anim.to($(".head1"), 0.1,{rotation: -4, ease: Power2.easeOut}, 14);
	anim.to($(".head1"), 0.2,{rotation: 360, ease: Power2.easeOut}, 14.2);
	anim.to($(".head1"), 0,{opacity: 0, x:0, y:0, rotation:0}, 14.3);

	anim.to($(".left-arm1"), 0.2,{y: -20, x:140, ease: Power3.easeOut}, 3);
	anim.to($(".left-arm1"), 0.2,{y: 100, x:0, ease: Power3.easeOut}, 3.8);
	anim.to($(".left-arm3"), 0.2,{y: -20, x:140, ease: Power3.easeOut}, 7);
	anim.to($(".left-arm3"), 0.2,{y: 100, x:0, ease: Power3.easeOut}, 7.5);
	anim.to($(".left-arm2"), 0.2,{y: -20, x:140, ease: Power3.easeOut}, 10.8);
	anim.to($(".left-arm2"), 0.2,{y: 100, x:0, ease: Power3.easeOut}, 11.3);

	anim.to($(".right-arm1"), 0.2,{y: 100, x:-140, ease: Power3.easeOut}, 3.8);
	anim.to($(".right-arm1"), 0.2,{y: -20, x:0, ease: Power3.easeOut}, 4.3);
	anim.to($(".right-arm3"), 0.2,{y: 100, x:-140, ease: Power3.easeOut}, 7.5);
	anim.to($(".right-arm3"), 0.2,{y: -20, x:0, ease: Power3.easeOut}, 8);
	anim.to($(".right-arm2"), 0.2,{y: 100, x:-140, ease: Power3.easeOut}, 10.8);
	anim.to($(".right-arm2"), 0.2,{y: -20, x:0, ease: Power3.easeOut}, 11.3);





	/*------------------------------------*\
			$BLUE1
	\*------------------------------------*/

	anim.to($("body"), 0.2,{backgroundColor:'rgb(165, 225, 255)'}, 15);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 16);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 17);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 18);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 19);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 20);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 21);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 23);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 24);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 25);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 26);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 27);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 28);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 15.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 16.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 17);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 18.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 19.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 20.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 21.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 23.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 24.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 25.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 26.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 27.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(20, 25,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 28.5);

	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 14);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 14.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 15);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 15.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 16);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 16.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 17);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 17.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 18);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 18.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 19);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 19.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 20);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 20.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 21);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 21.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 22);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 22.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 23);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 23.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 24);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 24.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 25);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 25.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 26);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 26.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 27);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 27.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: Bounce.easeOut}, 28);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: Bounce.easeOut}, 28.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: Bounce.easeOut}, 19);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: Bounce.easeOut}, 19.5);

	anim.to($(".head2"), 0,{opacity: 1}, 14.3);
	anim.to($(".head2"), 0.4,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 14.5);
	anim.to($(".head2"), 0.4,{scale: 1.13, ease: Elastic.easeOut.config(1, 0.3)}, 15);
	anim.to($(".head2"), 0.4,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 15.5);
	anim.to($(".head2"), 0.4,{scale: 1.12, ease: Elastic.easeOut.config(1, 0.3)}, 16);
	anim.to($(".head2"), 0.4,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 16.5);
	anim.to($(".head2"), 0.4,{scale: 1.14, rotation: -0.4, ease: Elastic.easeOut.config(1, 0.3)}, 17);
	anim.to($(".head2"), 0.4,{scale: 1, rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, 17.5);
	anim.to($(".head2"), 0.4,{scale: 1.12, ease: Elastic.easeOut.config(1, 0.3)}, 18);
	anim.to($(".head2"), 0.4,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 18.5);
	anim.to($(".head2"), 0.4,{scale: 1.15, rotation: 0.4, ease: Elastic.easeOut.config(1, 0.3)}, 19);
	anim.to($(".head2"), 0.4,{scale: 1, rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, 19.5);
	anim.to($(".head2"), 0.4,{scale: 1.12, ease: Elastic.easeOut.config(1, 0.3)}, 20);
	anim.to($(".head2"), 0.4,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 20.5);
	anim.to($(".head2"), 0.4,{scale: 1.14, rotation: -0.4, ease: Elastic.easeOut.config(1, 0.3)}, 21);
	anim.to($(".head2"), 0.4,{scale: 1, rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, 21.5);
	anim.to($(".head2"), 0.4,{scale: 1.12, ease: Elastic.easeOut.config(1, 0.3)}, 22);
	anim.to($(".head2"), 0.4,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, 22.5);
	anim.to($(".head2"), 0.2,{x: 10, ease: Elastic.easeOut.config(1, 0.3)}, 23);
	anim.to($(".head2"), 0.2,{y: 10, ease: Elastic.easeOut.config(1, 0.3)}, 23.5);
	anim.to($(".head2"), 0.2,{x: -10, ease: Elastic.easeOut.config(1, 0.3)}, 24);
	anim.to($(".head2"), 0.2,{y: -10, ease: Elastic.easeOut.config(1, 0.3)}, 24.5);
	anim.to($(".head2"), 0.2,{x: 10, ease: Elastic.easeOut.config(1, 0.3)}, 25);
	anim.to($(".head2"), 0.2,{y: 10, ease: Elastic.easeOut.config(1, 0.3)}, 25.5);
	anim.to($(".head2"), 0,{opacity: 0}, 25.5);
	anim.to($(".head1"), 0,{opacity: 1, x:10, y:10, rotation:0}, 25.5);
	anim.to($(".head1"), 0.2,{x: -10, ease: Elastic.easeOut.config(1, 0.3)}, 26);
	anim.to($(".head1"), 0.2,{y: -10, ease: Elastic.easeOut.config(1, 0.3)}, 26.5);
	anim.to($(".head1"), 0.2,{x: 10, ease: Elastic.easeOut.config(1, 0.3)}, 27);
	anim.to($(".head1"), 0.2,{y: 10, ease: Elastic.easeOut.config(1, 0.3)}, 27.5);
	anim.to($(".head1"), 0.2,{x: -10, ease: Elastic.easeOut.config(1, 0.3)}, 28);
	anim.to($(".head1"), 0.2,{y: -10, ease: Elastic.easeOut.config(1, 0.3)}, 28.5);

	anim.to($(".left-arm2"), 0.1,{y: 120, x: 400, ease: Circ.easeIn}, 23);
	anim.to($(".left-arm2"), 6.5,{x: 0, ease: Circ.easeOut}, 23.2);

	anim.to($(".right-arm2"), 0.1,{y: -20, x: -400, ease: Circ.easeIn}, 23);
	anim.to($(".right-arm2"), 6.5,{x: 0, ease: Circ.easeOut}, 23.2);





	/*------------------------------------*\
			$BLUE2
	\*------------------------------------*/

	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 29);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 30);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 31);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 32);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 33);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 34);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 35);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 36);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 37);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 38);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 39);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 40);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 41);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 42);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 43);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 44);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 29.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 30.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 31.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 32.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 33.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 34.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 35.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 36.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 37.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 38.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 39.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 40.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 41.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 42.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 43.5);
	anim.to($("body"), 0.2,{backgroundColor:'rgb(25, 20,' + (Math.floor(Math.random() * 256 + 40)) + ')'}, 44.5);

	anim.to($(".body"), 0.2,{x: 0, y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 29);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 29.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 30);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 30.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 31);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 31.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 32);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 32.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 33);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 33.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 34);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 34.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 35);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 35.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 36);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 36.5);
	anim.to($(".body"), 0.2,{y: 20, rotation: 1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 37);
	anim.to($(".body"), 0.2,{y: -5, rotation: -1, ease: SlowMo.ease.config(0.7, 0.7, false)}, 37.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 38);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 38.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 39);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 39.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 40);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 40.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 41);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 41.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 42);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 42.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 43);
	anim.to($(".body"), 0.2,{x:6, rotation:0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 43.5);
	anim.to($(".body"), 0.2,{x:6, rotation:6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 43);
	anim.to($(".body"), 0.2,{y:-6, rotation: 0, ease: SlowMo.ease.config(0.7, 0.7, false)}, 43.5);
	anim.to($(".body"), 0.2,{x:-6, rotation:-6, ease: SlowMo.ease.config(0.7, 0.7, false)}, 44);

	anim.to($(".head1"), 0.2,{x: 0, y: 10, rotation: 4, ease: SlowMo.ease.config(1.7)}, 29);
	anim.to($(".head1"), 0.2,{y: 0, rotation: -4, ease: SlowMo.ease.config(1.7)}, 29.5);
	anim.to($(".head1"), 0,{opacity: 0, x:0, y:0, rotation:0}, 29.5);
	anim.to($(".head2"), 0,{opacity: 1, x: 0, y: 0, rotation: -4}, 29.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 5, ease: SlowMo.ease.config(1.7)}, 30);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -5, ease: SlowMo.ease.config(1.7)}, 30.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 31);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 31.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 32);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 32.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 33);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 33.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 34);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 34.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 35);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 35.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 36);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 36.5);
	anim.to($(".head2"), 0.2,{y: 10, rotation: 6, ease: SlowMo.ease.config(1.7)}, 37);
	anim.to($(".head2"), 0.2,{y: 0, rotation: -6, ease: SlowMo.ease.config(1.7)}, 37.5);
	anim.to($(".head2"), 0.2,{x:2, rotation:8, ease: SlowMo.ease.config(0.7, 0.7, false)}, 38);
	anim.to($(".head2"), 0.2,{y:5, ease: SlowMo.ease.config(0.7, 0.7, false)}, 38.5);
	anim.to($(".head2"), 0,{opacity: 0, x:0, y:0, rotation:0}, 38.5);
	anim.to($(".head1"), 0,{opacity: 1, y:5, rotation:8}, 38.5);
	anim.to($(".hea2"), 0.2,{y: 0, ease: Power4.easeOut}, 39);
	anim.to($(".head1"), 0.2,{y: 5, ease: Power4.easeOut}, 39.5);
	anim.to($(".head1"), 0.2,{y: 0, ease: Power4.easeOut}, 40);
	anim.to($(".head1"), 0.2,{y: 5, ease: Power4.easeOut}, 40.5);
	anim.to($(".head1"), 0.2,{y: 0, ease: Power4.easeOut}, 41);
	anim.to($(".head1"), 0.2,{y: 5, x: -2, rotation:-8, ease: SlowMo.ease.config(0.7, 0.7, false)}, 41.5);
	anim.to($(".head1"), 0.2,{y: 0, ease: Power4.easeOut}, 42);
	anim.to($(".head1"), 0.2,{y: 5, ease: Power4.easeOut}, 42.5);
	anim.to($(".head1"), 0,{opacity: 0, x:0, y:5, rotation:0}, 42.5);
	anim.to($(".head2"), 0,{opacity: 1, x: -2, rotation:-8}, 42.5);
	anim.to($(".head2"), 0.2,{y: 0, ease: Power4.easeOut}, 43);
	anim.to($(".head2"), 0.2,{y: 5, ease: Power4.easeOut}, 43.5);
	anim.to($(".head2"), 0.2,{y: 0, ease: Power4.easeOut}, 44);

	anim.to($(".left-arm2"), 0.2,{y: 120, x: 160, ease: Power4.easeOut}, 30);
	anim.to($(".left-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 30.5);
	anim.to($(".left-arm2"), 0.2,{x: 160, ease: Power4.easeOut}, 32);
	anim.to($(".left-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 32.5);
	anim.to($(".left-arm2"), 0.2,{x: 160, ease: Power4.easeOut}, 34);
	anim.to($(".left-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 34.5);
	anim.to($(".left-arm2"), 0.2,{x: 160, ease: Power4.easeOut}, 35);
	anim.to($(".left-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 35.5);
	anim.to($(".left-arm2"), 0.2,{x: 160, ease: Power4.easeOut}, 36);
	anim.to($(".left-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 36.5);
	anim.to($(".left-arm2"), 0.2,{x: 160, ease: Power4.easeOut}, 37);
	anim.to($(".left-arm2"), 0.2,{y: 0, x: 0, ease: Power4.easeOut}, 37.5);
	anim.to($(".left-arm3"), 0.2,{y: 0, x: 400, ease: Circ.easeIn}, 38);
	anim.to($(".left-arm3"), 3,{x: 0, ease: Circ.easeOut}, 38.5);

	anim.to($(".right-arm2"), 0.2,{y: 120, x: -160, ease: Power4.easeOut}, 31);
	anim.to($(".right-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 31.5);
	anim.to($(".right-arm2"), 0.2,{x: -160, ease: Power4.easeOut}, 33);
	anim.to($(".right-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 33.5);
	anim.to($(".right-arm2"), 0.2,{x: -160, ease: Power4.easeOut}, 34.5);
	anim.to($(".right-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 35);
	anim.to($(".right-arm2"), 0.2,{x: -160, ease: Power4.easeOut}, 35.5);
	anim.to($(".right-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 36);
	anim.to($(".right-arm2"), 0.2,{x: -160, ease: Power4.easeOut}, 36.5);
	anim.to($(".right-arm2"), 0.2,{x: 0, ease: Power4.easeOut}, 37);
	anim.to($(".right-arm2"), 0.2,{x: -160, ease: Power4.easeOut}, 37.5);
	anim.to($(".right-arm2"), 0.2,{y: 0, x: 0, ease: Power4.easeOut}, 38);
	anim.to($(".right-arm3"), 0.2,{y: 0, x: -400, ease: Circ.easeIn}, 42);
	anim.to($(".right-arm3"), 3,{x: 0, ease: Circ.easeOut}, 42.4);





	/*------------------------------------*\
			$OPACITY2
	\*------------------------------------*/

	anim.to($(".body"), 0.4,{opacity: 0, x:0, rotation:0}, 44.2);
	anim.to($(".head2"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);
	anim.to($(".left-arm1"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);
	anim.to($(".left-arm2"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);
	anim.to($(".left-arm3"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);
	anim.to($(".right-arm1"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);
	anim.to($(".right-arm2"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);
	anim.to($(".right-arm3"), 0.4,{opacity: 0, x:0, rotation:0}, 44.5);

	anim.play();

});