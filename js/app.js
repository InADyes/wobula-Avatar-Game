var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;
var menu;

var arm1;
var arm2;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	controls = new input(avatar);
	menu = new GUI();
	data.addSounds();

	avatar.characterLeg1.rotation = -1;
	leg1 = game.add.tween(avatar.characterLeg1);
	leg1.to({rotation: 1}, 1000, Phaser.Easing.Linear.None);
	leg2 = game.add.tween(avatar.characterLeg2);
	leg2.to({rotation: 1}, 1000, Phaser.Easing.Linear.None);

	leg1Rev = game.add.tween(avatar.characterLeg1);
	leg1Rev.to({rotation: -1}, 1000, Phaser.Easing.Linear.None);
	leg2Rev = game.add.tween(avatar.characterLeg2);
	leg2Rev.to({rotation: -1}, 1000, Phaser.Easing.Linear.None);
}

function runArms() {
	if (avatar.characterLeg1.rotation == -1) {
		console.log('forward');
		leg1.start();
		leg2Rev.start();
	} else if (avatar.characterLeg1.rotation == 1) {
		console.log('reversing');
		leg1Rev.start();
		leg2.start();
	}
}


function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
	//runArms();
}