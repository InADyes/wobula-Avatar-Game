var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;

function create() {
	env = new environment('grassy');
	avatar = new spider('wobula');
	controls = new input(avatar);
	data.addSounds();
	addListeners()
}

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
}