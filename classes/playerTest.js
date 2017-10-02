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
		this.characterBox = game.add.sprite(50, 100);
		this.characterHead = game.add.sprite(0, -225, 'stickHead');
		this.characterHead.scale.setTo(.5, .5);
		this.characterChest = game.add.sprite(0, -200, 'stickChest');
		this.characterChest.scale.setTo(.5, .5);
		this.characterArm1 = game.add.sprite(-35, -195, 'stickArm1');
		this.characterArm1.scale.setTo(.5, .5);
		this.characterArm2 = game.add.sprite(35, -195, 'stickArm2');
		this.characterArm2.scale.setTo(.5, .5);
		this.characterLeg1 = game.add.sprite(-25, -50, 'stickLeg1');
		this.characterLeg1.scale.setTo(.5, .5);
		this.characterLeg2 = game.add.sprite(25, -50, 'stickLeg2');
		this.characterLeg2.scale.setTo(.5, .5);
		this.characterTorso = game.add.sprite(-10, -95, 'stickTorso');
		this.characterTorso.scale.setTo(.5, .5);

		this.characterBox.addChild(this.characterHead);
		this.characterBox.addChild(this.characterChest);
		this.characterBox.addChild(this.characterTorso);
		this.characterBox.addChild(this.characterLeg1);
		this.characterBox.addChild(this.characterLeg2);
		this.characterBox.addChild(this.characterArm1);
		this.characterBox.addChild(this.characterArm2);
		this.characterBox.scale.setTo(.5, .5);

		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.8;
	}
}