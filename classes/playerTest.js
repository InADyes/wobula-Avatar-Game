class playerTest {
	constructor(player) {
		this.name = player;
		this.character = game.add.sprite(100, 200, 'stick');
		this.character.scale.setTo(.25, .25);
		game.physics.enable(this.character, Phaser.Physics.ARCADE);
		this.character.body.collideWorldBounds = true;
		this.character.body.gravity.y = 500;
		this.character.body.bounce.y = 0.8;
		this.character.anchor.setTo(.4, .3);

		this.addNewCharacter();

		this.bloodGeyser = game.add.emitter(0, 0, 999);
		this.bloodGeyser.bounce.setTo(.5, .5);
		this.bloodGeyser.setXSpeed(800, -200);
		this.bloodGeyser.setYSpeed(500, 0);
		this.bloodGeyser.minParticleScale = .70;
		this.bloodGeyser.maxParticleScale = .50;
		this.bloodGeyser.makeParticles('bloodDrop1', 0, 250, true, true);
		this.character.addChild(this.bloodGeyser);
		this.bloodGeyser.start(false, 5000, 1);
		console.log(this.bloodGeyser.maxParticles);
	}
	addNewCharacter() {
		this.characterHead = game.add.sprite(50, 220, 'stickHead');
		this.characterHead.scale.setTo(.25, .25);

		this.characterHead.ptr = {x: this.characterHead.position.x, y: this.characterHead.position.y};
		console.log(this.characterHead.ptr);
		/*game.physics.enable(this.characterHead, Phaser.Physics.ARCADE);
		this.characterHead.body.collideWorldBounds = true;
		this.characterHead.body.gravity.y = 500;
		this.characterHead.body.bounce.y = 0.8;
		//this.characterHead.anchor.setTo(.4, .3);*/
		console.log(this.characterHead.ptr);
		this.characterChest = game.add.sprite(this.characterHead.ptr.x, this.characterHead.ptr.y + 20, 'stickChest');
		this.characterChest.scale.setTo(.25, .25);

		this.characterChest = game.add.sprite(50, 250, 'stickTorso');
		this.characterChest.scale.setTo(.25, .25);

		this.characterArm1 = game.add.sprite(41, 232, 'stickArm1');
		this.characterArm1.scale.setTo(.25, .25);

		this.characterArm2 = game.add.sprite(59, 232, 'stickArm2');
		this.characterArm2.scale.setTo(.25, .25);

		this.characterLeg1 = game.add.sprite(44, 266, 'stickLeg1');
		this.characterLeg1.scale.setTo(.25, .25);

		this.characterLeg2 = game.add.sprite(56, 266, 'stickLeg2');
		this.characterLeg2.scale.setTo(.25, .25);
	}
}