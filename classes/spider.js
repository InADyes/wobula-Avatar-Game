class spider {
	constructor(name) {
		this.name = name;
		this.addBodyParts();
		//this.bindBody();
		//this.addGeysers();
		this.physics();
		//this.animations = new animation(this);
	}
	addBodyParts() {
		this.characterFull = game.add.sprite(425, 200, 'charSpiderFull');
		this.characterFull.scale.setTo(.2, .2);
		this.characterBox = game.add.sprite(125, 250, 'bloodDrop1');
		this.characterHead = game.add.sprite(119, 162, 'charSpiderHead');
		this.characterHead.scale.setTo(.4, .4);
		this.characterHead.anchor.setTo(.5, .5);
		this.characterChest = game.add.sprite(122, 185, 'charSpiderChest');
		this.characterChest.scale.setTo(.19, .19);
		this.characterChest.anchor.setTo(.5, .5);
		this.characterPelvis = game.add.sprite(125, 220, 'charSpiderPelvis');
		this.characterPelvis.scale.setTo(.4, .4);
		this.characterPelvis.anchor.setTo(.5, .5);
		this.characterArmR = game.add.sprite(95, 200, 'charSpiderArmR');
		this.characterArmR.scale.setTo(.3, .3);
		this.characterArmR.anchor.setTo(.5, .5);
		this.characterArmL = game.add.sprite(148, 200, 'charSpiderArmL');
		this.characterArmL.scale.setTo(.3, .3);
		this.characterArmL.anchor.setTo(.5, .5);
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		//this.characterBox.body.collideWorldBounds = true;
		//this.characterBox.body.gravity.y = 500;
		//this.characterBox.body.bounce.y = 0.8;
	}
}