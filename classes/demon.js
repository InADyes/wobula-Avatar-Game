class demon {
	constructor(name) {
		this.name = name;
		this.airStatus = true;
		this.particleSource = [];
		this.particleSource.push('bloodDrop1', 'bloodDrop2', 'bloodDrop3', 'bloodDrop4');
		this.addBodyParts();
		this.addGeysers();
		this.bindBody();
		this.physics();
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(100, 100);
		this.characterWingL = game.add.sprite(-15, -75, 'charDemonWingL');
		this.characterWingL.anchor.setTo(1, .25);
		this.characterWingL.scale.setTo(1.5, 1.5);
		this.characterWingL.angle = -70;
		this.characterWingR = game.add.sprite(5, -75, 'charDemonWingR');
		this.characterWingR.anchor.setTo(0, .25);
		this.characterWingR.scale.setTo(1.5, 1.5);
		this.characterWingR.angle = 60;
		this.characterHead = game.add.sprite(-9, -120, 'charDemonHead');
		this.characterHead.anchor.setTo(.5, .5);
		this.characterChest = game.add.sprite(-4, -70, 'charDemonChest');
		this.characterChest.anchor.setTo(.5, .5);
		this.characterChest.scale.setTo(.7, 1);
		this.characterArm2 = game.add.sprite(5, -80, 'charDemonArmR');
		this.characterArm2.anchor.setTo(0, 0);
		this.characterArm1 = game.add.sprite(-15, -80, 'charDemonArmL');
		this.characterArm1.anchor.setTo(1, 0);
		this.characterLeg1 = game.add.sprite(-8, -13, 'charDemonLegL');
		this.characterLeg1.anchor.setTo(.2, 0);
		this.characterLeg1.scale.setTo(.7, 1);
		this.characterLeg2 = game.add.sprite(14, -13, 'charDemonLegR');
		this.characterLeg2.anchor.setTo(.8, 0);
		this.characterLeg2.scale.setTo(.7, 1);
		this.characterPelvis = game.add.sprite(.2, -19, 'charDemonPelvis');
		this.characterPelvis.anchor.setTo(.5, .5);
		this.characterPelvis.scale.setTo(.6, 1);
	}
	addIndividualGeysers(anchor, xoffset, yoffset) {
		var bloodGeyser = game.add.emitter(0 + xoffset, 0 + yoffset, 999);
		bloodGeyser.bounce.setTo(.5, .5);
		bloodGeyser.setXSpeed(800, -200);
		bloodGeyser.setYSpeed(500, -500);
		bloodGeyser.minParticleScale = .70;
		bloodGeyser.maxParticleScale = .50;
		bloodGeyser.makeParticles(this.particleSource, 0, 250, true, true);
		anchor.addChild(bloodGeyser);
		bloodGeyser.start(false, 5000, 1);
		return(bloodGeyser);
	}
	addGeysers() {
		this.headGeyser = this.addIndividualGeysers(this.characterHead, 0, 0);
	}
	bindBody() {
		this.characterBox.addChild(this.characterWingL);
		this.characterBox.addChild(this.characterWingR);
		this.characterBox.addChild(this.characterHead);
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