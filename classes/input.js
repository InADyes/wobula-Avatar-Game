class input {
	constructor(avatar) {
		this.cursors = game.input.keyboard.createCursorKeys();
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		this.player = avatar;
	}
	processor() {
		if (this.cursors.up.isDown)
			this.player.character.position.y -= 1;
		if (this.cursors.down.isDown)
			this.player.character.position.y += 1;
		if (this.cursors.left.isDown)
			this.player.character.position.x -= 1;
		if (this.cursors.right.isDown)
			this.player.character.position.x += 1;
	}
}