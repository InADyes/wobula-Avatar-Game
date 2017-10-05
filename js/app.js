var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;
var menu;
var playerAnime;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	playerAnime = new animation(avatar);
	controls = new input(avatar);
	menu = new GUI();
	data.addSounds();
}

function update() {
	controls.processor(playerAnime);
	game.physics.arcade.collide(env.floor, avatar.character);
}