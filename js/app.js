var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });

function preload() {
	game.load.baseURL = 'http://0.0.0.0:8000/';
	game.load.crossOrigin = 'anonymous';
	game.load.image('background', 'imgs/twitchBackground.png');
	game.load.image('stick', 'imgs/stick.png');
	game.load.image('bgCoreGrassy', 'imgs/bgCore.png');
	game.load.image('bgTopGrassy', 'imgs/bgTop.png');
	game.load.image('inventory', 'imgs/inventory.png');
	game.load.image('menu', 'imgs/menu.png');
}

var avatar;
var controls;
var env;
var menu;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	controls = new input(avatar);
	menu = new HUD();
}

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
}