class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.z;
		this.s;
		this.a;
		this.space;
		this.instantiateKeys();
		this.keys = [];
		this.keys.push(this.space, this.z, this.s, this.a);
	}
	instantiateKeys() {
		this.z = game.input.keyboard.addKey(Phaser.Keyboard.Z);
		this.z.press = false;
		this.z.action = () => { this.zAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.Z]);
		this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.space.press = false;
		this.space.action = () => { this.spaceAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
		this.a = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.a.press = false;
		this.a.action = () => { this.aAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.A]);
		this.s = game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.s.press = false;
		this.s.action = () => { this.sAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.S]);
	}
	processor() {
		this.cursorPad();
		for (var i = this.keys.length - 1; i >= 0; i--)
			this.keyPress(this.keys[i]);
		if (this.player.characterBox.position.x < 10)
			this.player.characterBox.position.x = 434;
		else if (this.player.characterBox.position.x > 435)
			this.player.characterBox.position.x = 11;
		if (this.player.characterBox.body.velocity.x > 0)
			this.player.characterBox.body.velocity.x -= 1;
		else if (this.player.characterBox.body.velocity.x < 0)
			this.player.characterBox.body.velocity.x += 1;
	}
	cursorPad() {
		if (this.cursors.up.isDown)
			this.player.characterBox.body.velocity.y -= 1;
		if (this.cursors.down.isDown)
			this.player.characterBox.body.velocity.y += 1;
		if (this.cursors.left.isDown)
			this.player.characterBox.body.velocity.x -= 5;
		if (this.cursors.right.isDown)
			this.player.characterBox.body.velocity.x += 5;
	}
	keyPress(key) {
		if (key.isDown)
			key.press = true;
		if (key.press == true && key.isUp) {
			key.action();
			key.press = false;
		}
	}
	aAction() {
		console.log('You pressed the a key');
		animations.waveLeft();
	}
	sAction() {
		console.log('You pressed the s key');
		animations.waveRight();
	}
	zAction() {
		console.log('You pressed the head key');
		this.player.headGeyser.flow(1000, 500, 15, -1);
	}
	spaceAction() {
		console.log('You pressed the space key');
		this.player.characterBox.body.velocity.y = 0;
		this.player.characterBox.body.velocity.y -= 400;
		this.player.characterWingR.angle = -10;
		this.player.characterWingL.angle = 10;
		data.jump.play();
	}
}

