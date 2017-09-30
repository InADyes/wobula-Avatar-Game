class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.m;
		this.space;
		this.instantiateKeys();
		this.keys = [];
		this.keys.push(this.m, this.space);
	}
	instantiateKeys() {
		this.m = game.input.keyboard.addKey(Phaser.Keyboard.M);
		this.m.press = false;
		this.m.action = () => { this.mAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.M]);
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.space.press = false;
		this.space.action = () => { this.spaceAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
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
			key.action();
			key.press = false;
		}
	}
	mAction() {
		this.player.character.body.velocity.y += 400;
		console.log('You pressed the m key');
	}
	spaceAction() {
		this.player.character.body.velocity.y = 0;
		this.player.character.body.velocity.y -= 400;
		data.jump.play();
		console.log('You pressed the space key');
	}
}