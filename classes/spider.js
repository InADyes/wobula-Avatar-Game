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
		this.characterLegLBack1 = game.add.sprite(59, -42, 'charSpiderLegLBack1');
		this.characterLegLBack1.scale.setTo(.32, .32);
		this.characterLegLBack1.anchor.setTo(.5, .5);
		this.characterLegLBack2 = game.add.sprite(56, -61, 'charSpiderLegLBack2');
		this.characterLegLBack2.scale.setTo(.5, .5);
		this.characterLegLBack2.anchor.setTo(0, 0);
	}
	bindBody() {
		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterArmL);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterPelvis);
		this.characterBox.addChild(this.characterArmR);
		this.characterBox.addChild(this.characterLegLBack1);
		this.characterBox.addChild(this.characterLegLBack2);
		this.characterBox.scale.setTo(.7, .7);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		//this.characterBox.body.collideWorldBounds = true;
		//this.characterBox.body.gravity.y = 500;
		//this.characterBox.body.bounce.y = 0.8;
	}
}