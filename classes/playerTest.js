class playerTest {
	constructor(player) {
		this.name = player;
		this.addBodyParts();
		this.headGeyser = this.addGeysers(this.characterHead);
		this.chestGeyser = this.addGeysers(this.characterChest);
		this.torsoGeyser = this.addGeysers(this.characterTorso);
		this.arm1Geyser = this.addGeysers(this.characterArm1, 10, 35);
		this.arm2Geyser = this.addGeysers(this.characterArm2);
		this.bindBody();
		this.physics();
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(50, 100);
		this.characterHead = game.add.sprite(-3, -225, 'stickHead');
		this.characterHead.scale.setTo(.5, .5);
		this.characterChest = game.add.sprite(0, -200, 'stickChest');
		this.characterChest.scale.setTo(.5, .5);
		this.characterArm1 = game.add.sprite(-20, -195, 'stickArm1');
		this.characterArm1.scale.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(20, -195, 'stickArm2');
		this.characterArm2.scale.setTo(.5, .5);
		this.characterLeg1 = game.add.sprite(-15, -120, 'stickLeg1');
		this.characterLeg1.scale.setTo(.5, .5);
		this.characterLeg2 = game.add.sprite(15, -120, 'stickLeg2');
		this.characterLeg2.scale.setTo(.5, .5);
		this.characterTorso = game.add.sprite(-5, -145, 'stickTorso');
		this.characterTorso.scale.setTo(.5, .5);
	}
	addGeysers(anchor, xoffset, yoffset) {
		var bloodGeyser = game.add.emitter(0 + xoffset, 0 + yoffset, 999);
		bloodGeyser.bounce.setTo(.5, .5);
		bloodGeyser.setXSpeed(800, -200);
		bloodGeyser.setYSpeed(500, 0);
		bloodGeyser.minParticleScale = .70;
		bloodGeyser.maxParticleScale = .50;
		bloodGeyser.makeParticles('bloodDrop1', 0, 250, true, true);
		anchor.addChild(bloodGeyser);
		console.log(bloodGeyser.position.y);
		bloodGeyser.start(false, 5000, 1);
		return(bloodGeyser);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterTorso);
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