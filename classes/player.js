class player {
	constructor(player) {
		this.name = player;
		this.addBodyParts();
		this.addGeysers();
		this.bindBody();
		this.physics();
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(50, 100);
		this.characterHead = game.add.sprite(0, -210, 'char1Head');
		this.characterHead.scale.setTo(.3, .3);
		this.characterHead.anchor.setTo(.5, 1);
		this.characterChest = game.add.sprite(0, -200, 'char1Chest');
		this.characterChest.scale.setTo(.3, .3);
		this.characterChest.anchor.setTo(.5, .5);
		this.characterArm1 = game.add.sprite(-10, -210, 'char1ArmR');
		this.characterArm1.scale.setTo(.3, .3);
		this.characterArm1.anchor.setTo(1, 0);
		this.characterArm2 = game.add.sprite(10, -210, 'char1ArmL');
		this.characterArm2.scale.setTo(.3, .3);
		this.characterArm2.anchor.setTo(0, 0);
		this.characterLeg1 = game.add.sprite(10, -175, 'char1LegR');
		this.characterLeg1.scale.setTo(.5, .5);
		this.characterLeg1.anchor.setTo(1, 0);
		this.characterLeg2 = game.add.sprite(10, -175, 'char1LegL');
		this.characterLeg2.scale.setTo(.5, .5);
		this.characterLeg2.anchor.setTo(0, 0);
		this.characterPelvis = game.add.sprite(5, -165, 'char1Pelvis');
		this.characterPelvis.scale.setTo(.3, .3);
		this.characterPelvis.anchor.setTo(.5, .5);
	}
	addGeysers() {
		this.headGeyser = this.addIndividualGeysers(this.characterHead);
		this.chestGeyser = this.addIndividualGeysers(this.characterChest, 15, 30);
		this.PelvisGeyser = this.addIndividualGeysers(this.characterPelvis, 20, 15);
		this.arm1Geyser = this.addIndividualGeysers(this.characterArm1, 10, 35);
		this.arm2Geyser = this.addIndividualGeysers(this.characterArm2, 10, 35);
		this.leg1Geyser = this.addIndividualGeysers(this.characterLeg1, 25, 25);
		this.leg2Geyser = this.addIndividualGeysers(this.characterLeg2, 25, 25);
	}
	addIndividualGeysers(anchor, xoffset, yoffset) {
		var bloodGeyser = game.add.emitter(0 + xoffset, 0 + yoffset, 999);
		bloodGeyser.bounce.setTo(.5, .5);
		bloodGeyser.setXSpeed(800, -200);
		bloodGeyser.setYSpeed(500, 0);
		bloodGeyser.minParticleScale = .70;
		bloodGeyser.maxParticleScale = .50;
		bloodGeyser.makeParticles('bloodDrop1', 0, 250, true, true);
		anchor.addChild(bloodGeyser);
		bloodGeyser.start(false, 5000, 1);
		return(bloodGeyser);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.scale.setTo(.5, .5);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.8;
	}
}