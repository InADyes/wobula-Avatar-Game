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
	avatar = new player('wobula');
	controls = new input(avatar);
	data.addSounds();
	addListeners()
}
var timer = 1;

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.characterBox);
	avatar.animations.walkSideToSide(5000, 'right');
}