class input {
	constructor(avatar) {
		this.cursors = game.input.keyboard.createCursorKeys();
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		this.avatar = avatar;
	}
	processor() {
		if (this.cursors.up.isDown)
			this.avatar.position.y -= 1;
		if (this.cursors.down.isDown)
			this.avatar.position.y += 1;
		if (this.cursors.left.isDown)
			this.avatar.position.x -= 1;
		if (this.cursors.right.isDown)
			this.avatar.position.x += 1;
	}
}