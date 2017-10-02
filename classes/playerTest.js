class playerTest {
	constructor(player) {
		this.name = player;
		this.character = game.add.sprite(200, 200, 'stick');
		this.character.scale.setTo(.25, .25);
		game.physics.enable(this.character, Phaser.Physics.ARCADE);
		this.character.body.collideWorldBounds = true;
		this.character.body.gravity.y = 500;
		this.character.body.bounce.y = 0.8;
		this.character.anchor.setTo(.4, .3);

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
}