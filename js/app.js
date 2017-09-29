var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });

function preload() {
	game.load.baseURL = 'http://0.0.0.0:8000/';
	game.load.crossOrigin = 'anonymous';
	game.load.image('background', 'imgs/twitchBackground.png');
	game.load.image('stick', 'imgs/stick.png');

	//game.load.spritesheet('rippleAn', 'imgs/rip3Sheet.png', 500, 500, 9);
}

var avatar;
var bg;
var controls;

function create() {
	bg = game.add.sprite(0, 0, 'background');
	avatar = game.add.sprite(200, 200, 'stick');
	avatar.scale.setTo(.25, .25);

	controls = new input(avatar);

	cursors = game.input.keyboard.createCursorKeys();
	space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
}

function update() {
	controls.processor();
}