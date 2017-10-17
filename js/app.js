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
	//avatar = new player('wubala');
	avatar = new tiger('wabala');
	//animations = new animationDemon(avatar);
	//animations = new animationPlayer(avatar);
	animations = new animationTiger(avatar);
	controls = new input(avatar, animations);
	data.addSounds();
	addListeners()
}

function update() {
	controls.processor();
	animations.processor();
	game.physics.arcade.collide(env.floor, avatar.characterBox);
}