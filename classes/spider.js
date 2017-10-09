class spider {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		this.bindBody();
		//this.addGeysers();
		this.physics();
		//this.animations = new animation(this);
	}
	addBodyParts() {
		this.characterFull = game.add.sprite(425, 200, 'charSpiderFull');
		this.characterFull.scale.setTo(.2, .2);
		this.characterBox = game.add.sprite(125, 250);
		this.characterHead = game.add.sprite(19, -80, 'charSpiderHead');
		this.characterHead.scale.setTo(.4, .4);
		this.characterHead.anchor.setTo(.5, .5);
		this.characterChest = game.add.sprite(22, -55, 'charSpiderChest');
		this.characterChest.scale.setTo(.19, .19);
		this.characterChest.anchor.setTo(.5, .5);
		this.characterPelvis = game.add.sprite(25, -20, 'charSpiderPelvis');
		this.characterPelvis.scale.setTo(.4, .4);
		this.characterPelvis.anchor.setTo(.5, .5);
		this.characterArmR = game.add.sprite(-5, -40, 'charSpiderArmR');
		this.characterArmR.scale.setTo(.3, .3);
		this.characterArmR.anchor.setTo(.5, .5);
		this.characterArmL = game.add.sprite(48, -40, 'charSpiderArmL');
		this.characterArmL.scale.setTo(.3, .3);
		this.characterArmL.anchor.setTo(.5, .5);
		this.characterLegLBack1 = game.add.sprite(40, -30, 'charSpiderLegLBack1');
		this.characterLegLBack1.scale.setTo(.32, .32);
		this.characterLegLBack1.anchor.setTo(0, 1);
		this.characterLegLBack2 = game.add.sprite(50, -111, 'charSpiderLegLBack2');
		this.characterLegLBack2.scale.setTo(1.5, 1.5);
		this.characterLegLBack2.anchor.setTo(0, 0);
		//this.characterLegRMiddle1 = game.add.sprite(-30, -55, 'charSpiderLegRMiddle1');
		//this.characterLegRMiddle1.scale.setTo(.3, .3);
		//this.characterLegRMiddle1.anchor.setTo(0, 0);
		//this.characterLegRMiddle2 = game.add.sprite(-88, -50, 'charSpiderLegRMiddle2');
		//this.characterLegRMiddle2.scale.setTo(1.5, 1.5);
		//this.characterLegRMiddle2.anchor.setTo(0, 0);
		//this.characterLegRFront1 = game.add.sprite(-20, -45, 'charSpiderLegRFront1');
		//this.characterLegRFront1.scale.setTo(.3, .3);
		//this.characterLegRFront1.anchor.setTo(0, 0);
		//this.characterLegRFront2 = game.add.sprite(-68, -35, 'charSpiderLegRFront2');
		//this.characterLegRFront2.scale.setTo(.5, .5);
		//this.characterLegRFront2.anchor.setTo(0, 0);
		this.characterLegLFront1 = game.add.sprite(35, -45, 'charSpiderLegLFront1');
		this.characterLegLFront1.scale.setTo(.29, .29);
		this.characterLegLFront1.anchor.setTo(0, 0);
		this.characterLegLFront2 = game.add.sprite(55, -35, 'charSpiderLegLFront2');
		this.characterLegLFront2.scale.setTo(.45, .45);
		this.characterLegLFront2.anchor.setTo(0, 0);
		this.characterLegLMiddle1 = game.add.sprite(35, -55, 'charSpiderLegLMiddle1');
		this.characterLegLMiddle1.scale.setTo(.3, .3);
		this.characterLegLMiddle1.anchor.setTo(0, 0);
		this.characterLegLMiddle2 = game.add.sprite(70, -50, 'charSpiderLegLMiddle2');
		this.characterLegLMiddle2.scale.setTo(.5, .5);
		this.characterLegLMiddle2.anchor.setTo(0, 0);
		//this.characterLegRBack1 = game.add.sprite(10, -30, 'charSpiderLegRBack1');
		//this.characterLegRBack1.scale.setTo(.32, .32);
		//this.characterLegRBack1.anchor.setTo(1, 1);
		//this.characterLegRBack2 = game.add.sprite(-55, -30, 'charSpiderLegRBack2');
		//this.characterLegRBack2.scale.setTo(1.5, 1.5);
		//this.characterLegRBack2.anchor.setTo(1, 0);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterLegLBack1);
		this.characterLegLBack1.addChild(this.characterLegLBack2);
		//this.characterBox.addChild(this.characterLegRBack1);
		//this.characterLegRBack1.addChild(this.characterLegRBack2);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterPelvis);
		//this.characterBox.addChild(this.characterLegRMiddle1);
		//this.characterLegRMiddle1.addChild(this.characterLegRMiddle2);
		this.characterBox.addChild(this.characterLegLMiddle1);
		this.characterBox.addChild(this.characterLegLMiddle2);
		//this.characterBox.addChild(this.characterLegRFront1);
		//this.characterBox.addChild(this.characterLegRFront2);
		this.characterBox.addChild(this.characterLegLFront1);
		this.characterBox.addChild(this.characterLegLFront2);
		this.characterBox.addChild(this.characterArmR);
		this.characterBox.addChild(this.characterArmL);
		this.characterBox.scale.setTo(.7, .7);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.8;
	}
}