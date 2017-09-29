class player {
	constructor(player) {
		this.name = player;
		this.character = game.add.sprite(200, 200, 'stick');
		this.character.scale.setTo(.25, .25);
		game.physics.enable(this.character, Phaser.Physics.ARCADE);
		this.character.body.collideWorldBounds = true;
		this.character.body.gravity.y = 200;
		this.character.body.bounce.y = 0.8;
	}
}