class player {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		this.bindBody();
		this.addGeysers();
		this.physics();
		this.animations = new animation(this);
		this.controls = new input();
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(50, 100);
		this.headblood = game.add.sprite(0, -195);
		this.arm1blood = game.add.sprite(-20, -165);
		this.arm2blood = game.add.sprite(25, -160);
		this.torsoblood = game.add.sprite(0, -165);
		this.leg1blood = game.add.sprite(-15, -120);
		this.leg2blood = game.add.sprite(25, -120);
		this.pelvisblood = game.add.sprite(5, -130);

		this.characterHead = game.add.sprite(0, -7, 'blueHead');
		this.characterHead.anchor.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(8, 0, 'blueArm2');
		this.characterArm2.anchor.setTo(0, 0);
		this.characterChest = game.add.sprite(0, 7, 'blueBody');
		this.characterChest.anchor.setTo(.5, .5);
		this.characterArm1 = game.add.sprite(-8, 0, 'blueArm1');
		this.characterArm1.anchor.setTo(1, 0);
		this.characterLeg1 = game.add.sprite(2, 15, 'blueLeg2');
		this.characterLeg1.anchor.setTo(0, 0);
		this.characterLeg2 = game.add.sprite(-2, 15, 'blueLeg1');
		this.characterLeg2.anchor.setTo(1, 0);
		//this.characterPelvis = game.add.sprite(5, 10, 'char1Pelvis');
		//this.characterPelvis.scale.setTo(.01, .01);
		//this.characterPelvis.anchor.setTo(.5, .5);
	}
	addGeysers() {
		this.headGeyser = this.addIndividualGeysers(this.characterHead, 0, 0);
		//this.headGeyser = this.addIndividualGeysers(this.characterHead, this.characterHead.width/2, this.characterHead.height/2);
		this.chestGeyser = this.addIndividualGeysers(this.characterChest, 0, 0);
		//this.pelvisGeyser = this.addIndividualGeysers(this.characterPelvis, 0, 0);
		this.leftarmGeyser = this.addIndividualGeysers(this.arm1blood, 0, 0);
		this.rightarmGeyser = this.addIndividualGeysers(this.arm2blood, 0, 0);
		this.leftlegGeyser = this.addIndividualGeysers(this.leg1blood, 0, 0);
		this.rightlegGeyser = this.addIndividualGeysers(this.leg2blood, 0, 0);
		//this.leftarmGeyser = this.addIndividualGeysers(this.characterArm1,0,0);
	}
	addIndividualGeysers(anchor, xoffset, yoffset) {
		var bloodGeyser = game.add.emitter(0 + xoffset, 0 + yoffset, 999);
		bloodGeyser.bounce.setTo(.5, .5);
		bloodGeyser.setXSpeed(800, -200);
		bloodGeyser.setYSpeed(500, 0);
		bloodGeyser.minParticleScale = .70;
		bloodGeyser.maxParticleScale = .50;
		anchor.addChild(bloodGeyser);
		bloodGeyser.start(false, 5000, 1);
		return(bloodGeyser);
	}
	bindBody() {
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterChest);
		//this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.addChild(this.headblood);
		this.characterBox.addChild(this.arm1blood);
		this.characterBox.addChild(this.torsoblood);
		//this.characterBox.addChild(this.pelvisblood);
		this.characterBox.addChild(this.arm2blood);
		this.characterBox.addChild(this.leg1blood);
		this.characterBox.addChild(this.leg2blood);
		this.characterBox.scale.setTo(1, 1);
		//this.characterBox.alpha = 0.5;
		//this.characterBox.alpha.setTo(.3);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}
}