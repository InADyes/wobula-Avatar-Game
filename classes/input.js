class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.v;
		this.x;
		this.c;
		this.space;
		this.instantiateKeys();
		this.keys = [];
		this.keys.push(this.space, this.z, this.x, this.c);
	}
	instantiateKeys() {
		this.z = game.input.keyboard.addKey(Phaser.Keyboard.Z);
		this.z.press = false;
		this.z.action = () => { this.zAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.Z]);
		this.x = game.input.keyboard.addKey(Phaser.Keyboard.X);
		this.x.press = false;
		this.x.action = () => { this.xAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.X]);
		this.c = game.input.keyboard.addKey(Phaser.Keyboard.C);
		this.c.press = false;
		this.c.action = () => { this.cAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.C]);
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
			this.player.characterBox.body.velocity.y -= 1;
		if (this.cursors.down.isDown)
			this.player.characterBox.body.velocity.y += 1;
		if (this.cursors.left.isDown) {
			this.player.characterBox.body.velocity.x -= 5;
			this.player.animations.walk();
		}
		if (this.cursors.right.isDown) {
			this.player.characterBox.body.velocity.x += 5;
			this.player.animations.walk();
		}
		if (this.cursors.left.isUp && this.player.characterBox.body.velocity.x < 0)
			this.player.characterBox.body.velocity.x += 5;
		if (this.cursors.right.isUp && this.player.characterBox.body.velocity.x > 0)
			this.player.characterBox.body.velocity.x -= 5;
	}
	keyPress(key) {
		if (key.isDown)
			key.press = true;
		if (key.press == true && key.isUp) {
			key.action();
			key.press = false;
		}
	}
	zAction() {
		console.log('You pressed the head key');
		avatar.headGeyser.flow(1000, 500, 15, -1);
	}
	xAction() {
		console.log('You pressed the chest key');
		avatar.chestGeyser.flow(1000, 500, 15, -1);
	}
	cAction() {
		console.log('You pressed the pelvis key');
		avatar.pelvisGeyser.flow(1000, 500, 15, -1);
	}
	spaceAction() {
		this.player.characterBox.body.velocity.y = 0;
		this.player.characterBox.body.velocity.y -= 400;
		data.jump.play();
		console.log('You pressed the space key');
	}
}