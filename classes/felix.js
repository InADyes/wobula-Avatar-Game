class felix {
	constructor(name) {
		this.name = name;
		this.airStatus = true;
		this.particleSource = [];
		this.particleSource2 = [];
		this.addBodyParts();
		this.bindBody();
		this.physics();
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(100, 100);
		this.characterHead = game.add.sprite(-15, -60, 'charFelixHead');
		this.characterBody = game.add.sprite(-15, -10, 'charFelixBody');
		this.characterArmR = game.add.sprite(5, -5, 'charFelixArmR');
		this.characterArmR.scale.setTo(.7, .7);
		this.characterArmR.anchor.setTo(1, .2);
		this.characterArmLJoint1 = game.add.sprite(15, -5, 'charFelixArmLJoint1');
		this.characterArmLJoint1.scale.setTo(.7, .7);
		this.characterArmLJoint1.anchor.setTo(0, .2);
		this.characterArmLJoint2 = game.add.sprite(40, 5, 'charFelixArmLJoint2');
		this.characterArmLJoint2.anchor.setTo(0, 0);
		this.characterArmLHandTop = game.add.sprite(30, 15, 'charFelixArmLHandTop');
		this.characterArmLHandTop.anchor.setTo(0, .7);
		this.characterArmLHandBot = game.add.sprite(30, 25, 'charFelixArmLHandBot');
		this.characterArmLHandBot.anchor.setTo(.3, 0);
	}
	bindBody() {
		this.characterBox.addChild(this.characterArmLJoint1);
		this.characterArmLJoint1.addChild(this.characterArmLJoint2);
		this.characterArmLJoint2.addChild(this.characterArmLHandBot);
		this.characterArmLJoint2.addChild(this.characterArmLHandTop);
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterArmR);
		this.characterBox.addChild(this.characterBody);
		this.characterBox.scale.setTo(.7, .7);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}
}