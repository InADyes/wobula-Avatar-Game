var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;
var menu;

var testAvatar;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	controls = new input(avatar);
	menu = new GUI();
	data.addSounds();

	testAvatar = new playerTest('might work');
}

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
	game.physics.arcade.collide(env.floor, testAvatar.character);
}