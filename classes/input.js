class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.m = game.input.keyboard.addKey(Phaser.Keyboard.M);
		this.m.press = false;
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.M]);
		this.keys = [];
		this.keys.push(this.m, this.space);
		console.log(this.keys);
	}
	processor() {
		this.cursorPad();
		for (var i = this.keys.length - 1; i >= 0; i--)
			this.keyPress(this.keys[i]);
	}
	cursorPad() {
		if (this.cursors.up.isDown)
			this.player.character.body.velocity.y -= 1;
		if (this.cursors.down.isDown)
			this.player.character.body.velocity.y += 1;
		if (this.cursors.left.isDown)
			this.player.character.body.velocity.x -= 5;
		if (this.cursors.right.isDown)
			this.player.character.body.velocity.x += 5;
		if (this.cursors.left.isUp && this.player.character.body.velocity.x < 0)
			this.player.character.body.velocity.x += 5;
		if (this.cursors.right.isUp && this.player.character.body.velocity.x > 0)
			this.player.character.body.velocity.x -= 5;
	}
	keyPress(key) {
		if (key.isDown)
			key.press = true;
		if (key.press == true && key.isUp) {
			console.log('you just pressed ' + key.event.code + ' key!');
			this.player.character.body.velocity.y -= 100;
			key.press = false;
		}
	}
}