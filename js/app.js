var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;
var animations;

function create() {
	env = new environment('grassy');
	//avatar = new demon('wobula');
	avatar = new player('wubala');
	//animations = new animationDemon(avatar);
	animations = new animationPlayer(avatar);
	controls = new input(avatar);
	data.addSounds();
	addListeners()
}

function update() {
	controls.processor();
	animations.processor();
	game.physics.arcade.collide(env.floor, avatar.characterBox);
}