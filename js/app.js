var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

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
	test = getDataHTML();
}

function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
}

function getDataHTML() {
	var blah = {};
	var blah2;

	blah.char = document.getElementById("full").value;
	blah.event = document.getElementById("full");
	blah.change = document.getElementById("display");
	console.log(blah.change);
	blah.event.addEventListener('change', function() {
		console.log(this.value);
		if (this.value != 'default') {
			blah.change.src = "../imgs/" + this.value + ".png";
			console.log(this.value);
			avatar.characterHead.loadTexture(this.value);
			console.log(blah.change.src);
			console.log(avatar.characterHead.key);
		}
	}, false);
	return (blah);
}