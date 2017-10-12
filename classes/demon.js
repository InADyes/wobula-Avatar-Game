class demon {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		this.bindBody();
		this.physics();
		this.animations = new animation(this, 'demon');
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(100, 100, 'bloodDrop1');
		this.characterWingL = game.add.sprite(-15, -75, 'charDevilWingL');
		this.characterWingL.anchor.setTo(1, .25);
		this.characterWingL.scale.setTo(1.5, 1.5);
		this.characterWingR = game.add.sprite(5, -75, 'charDevilWingR');
		this.characterWingR.anchor.setTo(0, .25);
		this.characterWingR.scale.setTo(1.5, 1.5);
		this.characterHead = game.add.sprite(-10, -130, 'charDevilHead');
		this.characterHead.anchor.setTo(.5, .5);
		this.characterChest = game.add.sprite(-4, -73, 'charDevilChest');
		this.characterChest.anchor.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(5, -80, 'charDevilArmR');
		this.characterArm2.anchor.setTo(0, 0);
		this.characterArm1 = game.add.sprite(-20, -80, 'charDevilArmL');
		this.characterArm1.anchor.setTo(1, 0);
		this.characterLeg1 = game.add.sprite(-17, -10, 'charDevilLegL');
		this.characterLeg1.anchor.setTo(.2, 0);
		this.characterLeg2 = game.add.sprite(22, -10, 'charDevilLegR');
		this.characterLeg2.anchor.setTo(.8, 0);
		this.characterPelvis = game.add.sprite(.2, -20, 'charDevilPelvis');
		this.characterPelvis.anchor.setTo(.5, .5);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterWingL);
		this.characterBox.addChild(this.characterWingR);
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.scale.setTo(.5, .5);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}
}