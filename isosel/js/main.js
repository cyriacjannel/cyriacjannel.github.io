/*------------------------------------*\
		$GAME
\*------------------------------------*/

var game = new Phaser.Game(1366, 768, Phaser.CANVAS, 'phaser-example', {
	preload: preload,
	create: create,
	update: update,
	render: render, 
});



/*------------------------------------*\
		$PRELOAD & VARIABLES
\*------------------------------------*/
function preload() {

	game.load.image('background', 'img/background.jpg');
	game.load.image('breton', 'img/breton.png');
	game.load.image('rage', 'img/rage.png');
	game.load.image('roah', 'img/roah.png');	
	game.load.image('vendeen', 'img/vendeen.png');
	game.load.image('mouette', 'img/mouette.png');
	game.load.image('gameover', 'img/gameover.png');
	game.load.image('win', 'img/win.png');
	game.load.image('cmd', 'img/cmd.png');
	game.load.image('r', 'img/r.png');
	game.load.image('relancer', 'img/relancer.png');

	game.load.audio('sound', 'audio/sound.mp3');
	game.load.audio('sad', 'audio/sad.mp3');
	game.load.audio('scream', 'audio/scream.mp3');
	game.load.audio('win', 'audio/win.mp3');

}

var breton;

var mouette;
var x = 0.8;

var timer;
var total = 0;

var dernier_vendeen1 = Date.now();
var dernier_vendeen2 = Date.now();
var dernier_vendeen3 = Date.now();

var dernier_rage = Date.now();
var bonus = 6;
var bonus1;
var bonus2;
var bonus3;
var bonus4;
var bonus5;
var bonus6;



/*------------------------------------*\
		$CREATE
\*------------------------------------*/
function create() {

	//PHYSICS
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//TIMER
	timer = game.time.create(false);
	timer.loop(500, updateCounter, this);
	timer.start();

	//SOUND
	sound = game.add.audio('sound');
	sad = game.add.audio('sad');
	scream = game.add.audio('scream');
	win = game.add.audio('win');
	sound.play();


	//BACKGROUND
	game.stage.backgroundColor = '#992d2d';
	background = game.add.tileSprite(683, 384, 1268, 3324, 'background');
	background.anchor.setTo(0.5, 0.5);
	background.angle += 65;

	//BRETON
	breton = game.add.sprite(200, 480, 'breton');
	breton.name = 'breton';
	game.physics.enable(breton, Phaser.Physics.ARCADE);
	breton.body.immovable = true;
	breton.body.setSize(2, 2, 59, 70);
	bonus1 = game.add.sprite(10, 10, 'rage');
	bonus2 = game.add.sprite(90, 10, 'rage');
	bonus3 = game.add.sprite(170, 10, 'rage');
	bonus4 = game.add.sprite(250, 10, 'rage');
	bonus5 = game.add.sprite(330, 10, 'rage');
	bonus6 = game.add.sprite(410, 10, 'rage');

	//VENDEENS
	vendeenGroup1 = game.add.group();
	game.physics.enable(vendeenGroup1, Phaser.Physics.ARCADE);
	vendeenGroup1.enableBody = true;

	vendeenGroup2 = game.add.group();
	game.physics.enable(vendeenGroup2, Phaser.Physics.ARCADE);
	vendeenGroup2.enableBody = true;

	vendeenGroup3 = game.add.group();
	game.physics.enable(vendeenGroup3, Phaser.Physics.ARCADE);
	vendeenGroup3.enableBody = true;

	//MOUETTE
	mouetteGroup = game.add.group();
	game.physics.enable(mouetteGroup, Phaser.Physics.ARCADE);
	mouetteGroup.enableBody = true;
}



/*------------------------------------*\
		$COUNTER / SPAWN / EVENT
\*------------------------------------*/

function updateCounter() {

	if (total == 0) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 2) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 4) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 6) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1890, -204, 'vendeen');
	} else if (total == 10) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 12) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 14) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 16) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 17) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 19) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 20) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 22) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 24) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 26) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 28) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 30) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 31) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 32) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 33) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 34) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 35) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 36) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 38) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 40) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 42) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 46) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 48) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 50) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 52) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 53) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 54) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 56) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 57) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 58) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 60) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 63) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 64) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 66) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 68) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 70) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 72) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 74) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 76) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 78) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 80) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 82) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 83) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 84) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 85) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 86) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 87) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 88) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 89) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 90) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 91) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 93) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 94) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 95) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 96) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total ==97) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 98) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 99) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 100) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 101) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 102) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 103) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 105) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} if (total == 106) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 110) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 112) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 114) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1890, -204, 'vendeen');
	} else if (total == 116) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 118) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 120) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 122) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 124) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 126) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 128) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 130) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 132) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 134) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 136) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 138) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 140) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 142) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 143) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 144) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 145) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 146) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 148) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 150) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 152) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 156) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 157) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 158) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 159) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 160) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 162) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 163) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 164) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 166) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 167) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 168) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 170) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 173) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 174) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 176) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 178) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 180) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 182) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 184) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 186) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 188) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 190) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 192) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 193) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 194) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 195) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 196) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 197) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 198) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 199) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 200) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 201) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 203) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 204) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 205) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 206) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total ==207) {
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 208) {
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 209) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
	} else if (total == 210) {
		mouetteGroup.create(1190, -356, 'mouette');
		mouetteGroup.create(2380, -182, 'mouette');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 211) {
		vendeenGroup1.create(1690, -320, 'vendeen');
	} else if (total == 212) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 213) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 215) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 216) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 217) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 218) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	} else if (total == 219) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		vendeenGroup2.create(1790, -264, 'vendeen');
		vendeenGroup3.create(1890, -204, 'vendeen');
	}

	//WIN
	else if (total == 229) {
		game.stage.backgroundColor = '#2C9952';
		breton.kill();
		bonus1.kill();
		bonus2.kill();
		bonus3.kill();
		bonus4.kill();
		bonus5.kill();
		bonus6.kill();
		vendeenGroup1.callAll('kill');
		vendeenGroup2.callAll('kill');
		vendeenGroup3.callAll('kill');
		mouetteGroup.callAll('kill');

		sound.stop();
		scream.stop();
		win.play();

		background.alpha = 0.1;

		win = game.add.sprite(683, 384, 'win');
		win.anchor.setTo(0.5);
		cmd = game.add.sprite(683, 384, 'cmd');
		cmd.anchor.setTo(0.5);
		r = game.add.sprite(683, 374, 'r');
		r.anchor.setTo(0.5);
		relancer = game.add.sprite(683, 384, 'relancer');
		relancer.anchor.setTo(0.5);
		game.add.tween(win.scale).to({x: 1.2, y:1.2}, 400, Phaser.Easing.Quadratic.In, true, 0, 1000, true);
		game.add.tween(cmd).to({ y: 374 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
		game.add.tween(r).to({ y: 384 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

		timer.stop();
	}
	total++;
}



/*------------------------------------*\
		$UPDATE
\*------------------------------------*/
function update() {

	//VELOCITY & COLLISION
	vendeenGroup1.setAll('body.velocity.x', -714 * x);
	vendeenGroup1.setAll('body.velocity.y', 332 * x);
	vendeenGroup2.setAll('body.velocity.x', -714 * x);
	vendeenGroup2.setAll('body.velocity.y', 332 * x);
	vendeenGroup3.setAll('body.velocity.x', -714 * x);
	vendeenGroup3.setAll('body.velocity.y', 332 * x);
	mouetteGroup.setAll('body.velocity.x', -1070 * x);
	mouetteGroup.setAll('body.velocity.y', 498 * x);
	game.physics.arcade.collide(breton, vendeenGroup1, collisionHandler, null, this);
	game.physics.arcade.collide(breton, vendeenGroup2, collisionHandler, null, this);
	game.physics.arcade.collide(breton, vendeenGroup3, collisionHandler, null, this);

	//BACKGROUND
	background.tilePosition.y += 6;
	if (bonus == 5) {
		bonus6.kill();
	} else if (bonus == 4) {
		bonus5.kill();
	} else if (bonus == 3) {
		bonus4.kill();
	} else if (bonus == 2) {
		bonus3.kill();
	} else if (bonus == 1) {
		bonus2.kill();
	} else if (bonus == 0) {
		bonus1.kill();
	}

	//VENDEENS
	if ((game.input.keyboard.isDown(Phaser.Keyboard.A)) && ((Date.now() - dernier_vendeen1) > 1000)) {
		vendeenGroup1.create(1690, -320, 'vendeen');
		dernier_vendeen1 = Date.now();
	} else if ((game.input.keyboard.isDown(Phaser.Keyboard.Z)) && ((Date.now() - dernier_vendeen2) > 1000)) {
		vendeenGroup2.create(1790, -264, 'vendeen');
		dernier_vendeen2 = Date.now();
	} else if ((game.input.keyboard.isDown(Phaser.Keyboard.E)) && ((Date.now() - dernier_vendeen3) > 1000)) {
		vendeenGroup3.create(1890, -204, 'vendeen');
		dernier_vendeen3 = Date.now();
	}

	//KEYBOARD
	if ((game.input.keyboard.isDown(Phaser.Keyboard.UP)) && ((Date.now() - dernier_rage) > 5000) && (bonus > 0)) {
		scream.play();
		roah = game.add.sprite(400, 120, 'roah');
		game.add.tween(roah).to({ x: 410, y: 110 }, 100, Phaser.Easing.Quadratic.InOut, true, 0, 100, true);
		background.alpha = 0.1;
		vendeenGroup1.callAll('kill');
		vendeenGroup2.callAll('kill');
		vendeenGroup3.callAll('kill');
		mouetteGroup.callAll('kill');
		dernier_rage = Date.now();
		bonus --;
		bonus6.alpha=0.4;
		bonus5.alpha=0.4;
		bonus4.alpha=0.4;
		bonus3.alpha=0.4;
		bonus2.alpha=0.4;
		bonus1.alpha=0.4;	
		setTimeout(function () {
			roah.kill();
			background.alpha = 1;
		}, 1000);
		setTimeout(function () {
			bonus6.alpha=1;
			bonus5.alpha=1;
			bonus4.alpha=1;
			bonus3.alpha=1;
			bonus2.alpha=1;
			bonus1.alpha=1;
		}, 5000);
	} 

	var bretonx = breton.x;
	if ((game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) && (bretonx == 200)) {
			breton.x = 100;
			breton.y = 420;
			bretonx = breton.x
	} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			breton.x = 200;
			breton.y = 480;
			bretonx = breton.x
	} else if ((game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) && (bretonx == 200)) {
			breton.x = 300;
			breton.y = 540;
			bretonx = breton.x
	}
}



/*------------------------------------*\
		$GAMEOVER
\*------------------------------------*/

function collisionHandler (obj1, obj2) {

	clearTimeout();

	bonus != 0;

	game.stage.backgroundColor = '#992d2d';
	breton.kill();
	bonus1.kill();
	bonus2.kill();
	bonus3.kill();
	bonus4.kill();
	bonus5.kill();
	bonus6.kill();
	vendeenGroup1.callAll('kill');
	vendeenGroup2.callAll('kill');
	vendeenGroup3.callAll('kill');
	mouetteGroup.callAll('kill');

	sound.stop();
	scream.stop();
	sad.play();

	background.alpha = 0.1;

	gameover = game.add.sprite(683, 384, 'gameover');
	gameover.anchor.setTo(0.5);
	cmd = game.add.sprite(683, 384, 'cmd');
	cmd.anchor.setTo(0.5);
	r = game.add.sprite(683, 374, 'r');
	r.anchor.setTo(0.5);
	relancer = game.add.sprite(683, 384, 'relancer');
	relancer.anchor.setTo(0.5);
	game.add.tween(cmd).to({ y: 374 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
	game.add.tween(r).to({ y: 384 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

	timer.stop();
}



/*------------------------------------*\
		$SCORE
\*------------------------------------*/
function render() {

	game.debug.text('Score: ' + total + '/230', 30, 738);

}