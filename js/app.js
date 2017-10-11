var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

var kk = 0;

var test;
var particlesource = [];

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;

function create() {
	env = new environment('grassy');
	avatar = new gnome('wobula');
	controls = new input(avatar);
	data.addSounds();
	addListeners()
}
var timer = 1;
var direction = 'right';

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.characterBox);
/*	if ((avatar.animations.walkSideToSide(random(5000, 200), direction)) == 0) {
		if (random(6, 1) > 3)
			direction = 'right';
		else
			direction = 'left';
		console.log(direction);
	}*/
}