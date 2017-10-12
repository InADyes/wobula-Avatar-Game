class player {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		this.bindBody();
		this.physics();
		this.animations = new animation(this, 'player');
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(100, 100);
		this.characterHead = game.add.sprite(0, -240, 'char1Head');
		this.characterHead.anchor.setTo(.5, .5);
		this.characterChest = game.add.sprite(0, -150, 'char1Chest');
		this.characterChest.anchor.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(35, -175, 'char1ArmL');
		this.characterArm2.anchor.setTo(0, 0);
		this.characterArm1 = game.add.sprite(-20, -175, 'char1ArmR');
		this.characterArm1.anchor.setTo(1, 0);
		this.characterLeg1 = game.add.sprite(8, -70, 'char1LegL');
		this.characterLeg1.anchor.setTo(1, 0);
		this.characterLeg2 = game.add.sprite(8, -70, 'char1LegR');
		this.characterLeg2.anchor.setTo(0, 0);
		this.characterPelvis = game.add.sprite(0, -50, 'char1Pelvis');
		this.characterPelvis.anchor.setTo(.5, .5);
		this.characterPelvis.scale.setTo(.8, .8);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.scale.setTo(.3, .3);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}
}