var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update });
var data;

function preload() {
	data = new mediaLibrary();
}

var avatar;
var controls;
var env;
var menu;

var leg1;
var leg2;
var leg1Rev;
var leg2Rev;
var arm1;
var arm2;
var arm1Rev;
var arm2Rev;

function create() {
	env = new environment('grassy');
	avatar = new player('wobula');
	controls = new input(avatar);
	menu = new GUI();
	data.addSounds();

	avatar.characterLeg1.rotation = -.5;
	leg1 = game.add.tween(avatar.characterLeg1);
	leg1.to({rotation: .5}, 100, Phaser.Easing.Linear.None);
	leg2 = game.add.tween(avatar.characterLeg2);
	leg2.to({rotation: .5}, 100, Phaser.Easing.Linear.None);

	leg1Rev = game.add.tween(avatar.characterLeg1);
	leg1Rev.to({rotation: -.5}, 100, Phaser.Easing.Linear.None);
	leg2Rev = game.add.tween(avatar.characterLeg2);
	leg2Rev.to({rotation: -.5}, 100, Phaser.Easing.Linear.None);

	avatar.characterArm1.angle = -10;
	arm1 = game.add.tween(avatar.characterArm1);
	arm1.to({angle: -110}, 400, Phaser.Easing.Linear.None);
	arm1Rev = game.add.tween(avatar.characterArm1);
	arm1Rev.to({angle: -10}, 400, Phaser.Easing.Linear.None);

	arm2 = game.add.tween(avatar.characterArm2);
	arm2.to({angle: -10}, 400, Phaser.Easing.Linear.None);
	arm2Rev = game.add.tween(avatar.characterArm2);
	arm2Rev.to({angle: 90}, 400, Phaser.Easing.Linear.None);
}

function runLegs() {
	if (avatar.characterLeg1.rotation == -.5) {
		console.log('leg forward');
		leg1.start();
		leg2Rev.start();
	} else if (avatar.characterLeg1.rotation == .5) {
		console.log('leg reversing');
		leg1Rev.start();
		leg2.start();
	}
}

function runArms() {
	console.log(avatar.characterArm1.angle);
	if (avatar.characterArm1.angle == -10) {
		console.log('arm forward');
		arm1.start();
		arm2Rev.start();
	} else if (avatar.characterArm1.angle == -110) {
		console.log('arm reversing');
		arm2.start();
		arm1Rev.start();
	}
}


function update() {
	controls.processor();
	game.physics.arcade.collide(env.floor, avatar.character);
}