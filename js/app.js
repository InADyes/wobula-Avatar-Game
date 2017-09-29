var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });

function preload() {
	game.load.baseURL = 'http://0.0.0.0:8000/';
	game.load.crossOrigin = 'anonymous';
	game.load.image('background', 'imgs/twitchBackground.png');
	game.load.image('stick', 'imgs/stick.png');
	game.load.image('bgCore', 'imgs/bgCore.png');
	game.load.image('bgTop', 'imgs/bgTop.png');
}

var avatar;
var controls;
var env;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	controls = new input(avatar);
	
}

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
}