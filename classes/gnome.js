class gnome {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		this.bindBody();
		this.physics();
		this.animations = new animation(this, 'gnome');
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(100, 100);
		this.characterHead = game.add.sprite(0, -30, 'charFireHead');
		this.characterHead.anchor.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(9, -6, 'charFireArmR');
		this.characterArm2.anchor.setTo(0, 0);
		this.characterArm1 = game.add.sprite(-9, -4, 'charFireArmL');
		this.characterArm1.anchor.setTo(1, 0);
		this.characterLeg1 = game.add.sprite(2, 5, 'charFireLegR');
		this.characterLeg1.anchor.setTo(1, 0);
		this.characterLeg2 = game.add.sprite(2, 5, 'charFireLegL');
		this.characterLeg2.anchor.setTo(0, 0);
		this.characterPelvis = game.add.sprite(0, 10, 'charFirePelvis');
		this.characterPelvis.anchor.setTo(.5, .5);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.scale.setTo(.2, .2);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}
}