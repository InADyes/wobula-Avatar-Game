class tiger {
	constructor(name) {
		this.name = name;
		this.facing = 0;
		this.particlesource = [];
		this.particlesource.push('bloodDrop1', 'bloodDrop2', 'bloodDrop3', 'bloodDrop4');
		this.addBodyParts();
		this.bindBody();
		this.physics();
		this.addGeysers();
		
		//this.animations = new animation(this, 'player');
	}
	addBodyParts() {
		this.characterBox = game.add.sprite(50, 100);
		this.characterBoxleft = game.add.sprite(0,0);
		this.characterBoxright = game.add.sprite(0,0);
/*
		this.headblood = game.add.sprite(0, -195);
		//this.headblood.scale.setTo(.3, .3);
		this.arm1blood = game.add.sprite(-20, -165);
		//this.arm1blood.scale.setTo(.3, .3);
		this.arm2blood = game.add.sprite(25, -160);
		//this.arm2blood.scale.setTo(.3, .3);
		this.torsoblood = game.add.sprite(0, -165);
		//this.torsoblood.scale.setTo(.3, .3);
		this.leg1blood = game.add.sprite(-15, -120);
		//this.leg1blood.scale.setTo(.3, .3);
		this.leg2blood = game.add.sprite(25, -120);
		//this.leg2blood.scale.setTo(.3, .3);
		this.pelvisblood = game.add.sprite(5, -130);
		//this.pelvisblood.scale.setTo(.3, .3);
*/
		this.poopoutleft = game.add.sprite(0,0);
		this.poopoutright = game.add.sprite(0,0);
		//tiger left
		this.characterHeadstillleft = game.add.sprite(-24, -28, 'tigerhead');
		this.characterHeadstillleft.scale.setTo(.6, .6);
		this.characterHeadstillleft.anchor.setTo(.5, .5);
		
		this.characterHeadleft = game.add.sprite(-24, -28, 'tigerheadmove');
		this.characterHeadleft.scale.setTo(.6, .6);
		this.characterHeadleft.anchor.setTo(.5, .5);
		
		this.characterArm1left = game.add.sprite(-10, 3, 'tigerfrontleg1');
		this.characterArm1left.scale.setTo(.6, .6);
		this.characterArm1left.anchor.setTo(.5, .2);
		
		this.characterChestleft = game.add.sprite(-4, 12, 'tigerbody');
		//this.characterChest.scale.setTo(.3, .3);
		this.characterChestleft.anchor.setTo(.5, .5);
		
		this.characterArm2left = game.add.sprite(-10, 3, 'tigerfrontleg2');
		this.characterArm2left.scale.setTo(.6, .6);
		this.characterArm2left.anchor.setTo(.5, .2);
		
		this.characterLeg1left = game.add.sprite(19, 3, 'tigerbackleg1');
		this.characterLeg1left.scale.setTo(.6, .6);
		this.characterLeg1left.anchor.setTo(.4, .2);
		
		this.characterLeg2left = game.add.sprite(19, 3, 'tigerbackleg2');
		this.characterLeg2left.scale.setTo(.6, .6);
		this.characterLeg2left.anchor.setTo(.5, .2);
		
		this.characterPelvisleft = game.add.sprite(17, -2, 'tigertail');
		//this.characterPelvis.scale.setTo(.01, .01);
		this.characterPelvisleft.anchor.setTo(0, .1);
		
		//tiger right
		
		this.characterHeadstillright = game.add.sprite(27, -28, 'tigerhead');
		this.characterHeadstillright.scale.setTo(-0.6, .6);
		this.characterHeadstillright.anchor.setTo(.5, .5);
		
		this.characterHeadright = game.add.sprite(27, -28, 'tigerheadmove');
		this.characterHeadright.scale.setTo(-0.6, .6);
		this.characterHeadright.anchor.setTo(.5, .5);
		
		this.characterArm1right = game.add.sprite(13, 9, 'tigerfrontleg1');
		this.characterArm1right.scale.setTo(-0.6, .6);
		this.characterArm1right.anchor.setTo(.5, .2);
		
		this.characterChestright = game.add.sprite(5, 12, 'tigerbody');
		this.characterChestright.scale.setTo(-1, 1);
		this.characterChestright.anchor.setTo(.5, .5);
		
		this.characterArm2right = game.add.sprite(13, 9, 'tigerfrontleg2');
		this.characterArm2right.scale.setTo(-0.6, .6);
		this.characterArm2right.anchor.setTo(.5, .2);
		
		this.characterLeg1right = game.add.sprite(-16, 9, 'tigerbackleg1');
		this.characterLeg1right.scale.setTo(-0.6, .6);
		this.characterLeg1right.anchor.setTo(.4, .2);
		
		this.characterLeg2right = game.add.sprite(-16, 9, 'tigerbackleg2');
		this.characterLeg2right.scale.setTo(-0.6, .6);
		this.characterLeg2right.anchor.setTo(.5, .2);
		
		this.characterPelvisright = game.add.sprite(-16, -2, 'tigertail');
		this.characterPelvisright.scale.setTo(-1, 1);
		this.characterPelvisright.anchor.setTo(0, .1);
		
	}
	addGeysers() {
		/*this.headGeyser = this.addIndividualGeysers(this.characterHeadleft, 0, 0);
		//this.headGeyser = this.addIndividualGeysers(this.characterHead, this.characterHead.width/2, this.characterHead.height/2);
		this.chestGeyser = this.addIndividualGeysers(this.characterChestleft, 0, 0);
		this.pelvisGeyser = this.addIndividualGeysers(this.characterPelvisleft, 0, 0);
		this.leftarmGeyser = this.addIndividualGeysers(this.arm1blood, 0, 0);
		this.rightarmGeyser = this.addIndividualGeysers(this.arm2blood, 0, 0);
		this.leftlegGeyser = this.addIndividualGeysers(this.leg1blood, 0, 0);
		this.rightlegGeyser = this.addIndividualGeysers(this.leg2blood, 0, 0);
		*/
		this.poopleftGeyser = this.addIndividualGeysers(this.characterPelvisleft, 0, 0);
		this.pooprightGeyser = this.addIndividualGeysers(this.characterPelvisright, 0, 0);
		//this.leftarmGeyser = this.addIndividualGeysers(this.characterArm1,0,0);
	}

	addIndividualGeysers(anchor, xoffset, yoffset) {
		var bloodGeyser = game.add.emitter(0 + xoffset, 0 + yoffset, 999);
		bloodGeyser.bounce.setTo(.5, .5);
		bloodGeyser.setXSpeed(-200, -800);
		bloodGeyser.setYSpeed(50, 0);
		bloodGeyser.minParticleScale = .70;
		bloodGeyser.maxParticleScale = .50;
		bloodGeyser.makeParticles('poop', 0, 250, true, true);
		anchor.addChild(bloodGeyser);
		bloodGeyser.start(false, 5000, 1);
		return(bloodGeyser);
	}

	bindBody() {
		this.characterBox.addChild(this.characterBoxleft);
		this.characterBoxleft.addChild(this.characterHeadstillleft);
		this.characterBoxleft.addChild(this.characterHeadleft);
		this.characterBoxleft.addChild(this.characterArm1left);
		this.characterBoxleft.addChild(this.characterLeg1left);
		this.characterBoxleft.addChild(this.characterChestleft);
		this.characterBoxleft.addChild(this.characterPelvisleft);
		this.characterBoxleft.addChild(this.characterLeg2left);
		this.characterBoxleft.addChild(this.characterArm2left);
		this.characterHeadleft.alpha = 0;
		

		this.characterBox.addChild(this.characterBoxright);
		this.characterBoxright.addChild(this.characterHeadstillright);
		this.characterBoxright.addChild(this.characterHeadright);
		this.characterBoxright.addChild(this.characterArm1right);
		this.characterBoxright.addChild(this.characterLeg1right);
		this.characterBoxright.addChild(this.characterChestright);
		this.characterBoxright.addChild(this.characterPelvisright);
		this.characterBoxright.addChild(this.characterLeg2right);
		this.characterBoxright.addChild(this.characterArm2right);
		this.characterBoxright.alpha = 0;
		this.characterHeadright.alpha = 0;

	
		//this.characterBox.scale.setTo(.3, .3);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}

}