var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

var test;


function preload() {
	data = new mediaLibrary();
	test = getDataHTML();
	console.log(test.char);
}

var avatar;
var controls;
var env;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	controls = new input(avatar);
	data.addSounds();
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
			blah.change.src = "../imgs/" + this.value;
			console.log(blah.change.src);
		}
	}, false);
	return (blah);
}