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
var bg;
var controls;
var floorCore;
var floorTop;

function create() {
	bg = game.add.sprite(0, 0, 'background');
	
	floorTop = game.add.tileSprite(0, 340, 600, 10, 'bgTop');
	floorCore = game.add.tileSprite(0, 350, 600, 20, 'bgCore');
	
	avatar = game.add.sprite(200, 270, 'stick');
	avatar.scale.setTo(.25, .25);

	controls = new input(avatar);
}

function update() {
	controls.processor();
}