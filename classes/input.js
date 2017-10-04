class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.m;
		this.n;
		this.v;
		this.c;
		this.b;
		this.z;
		this.space;
		this.instantiateKeys();
		this.keys = [];
		this.keys.push(this.m, this.space, this.n, this.v, this.c, this.x, this.b, this.z);
	}
	instantiateKeys() {
		this.z = game.input.keyboard.addKey(Phaser.Keyboard.Z);
		this.z.press = false;
		this.z.action = () => { this.zAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.Z]);
		this.b = game.input.keyboard.addKey(Phaser.Keyboard.B);
		this.b.press = false;
		this.b.action = () => { this.bAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.B]);
		this.x = game.input.keyboard.addKey(Phaser.Keyboard.X);
		this.x.press = false;
		this.x.action = () => { this.xAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.X]);
		this.c = game.input.keyboard.addKey(Phaser.Keyboard.C);
		this.c.press = false;
		this.c.action = () => { this.cAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.C]);
		this.v = game.input.keyboard.addKey(Phaser.Keyboard.V);
		this.v.press = false;
		this.v.action = () => { this.vAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.V]);
		this.m = game.input.keyboard.addKey(Phaser.Keyboard.M);
		this.m.press = false;
		this.m.action = () => { this.mAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.M]);
		this.n = game.input.keyboard.addKey(Phaser.Keyboard.N);
		this.n.press = false;
		this.n.action = () => { this.nAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.N]);
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
			runLegs();
			runArms();
		}
		if (this.cursors.right.isDown) {
			this.player.characterBox.body.velocity.x += 5;
			runLegs();
			runArms();
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
	vAction() {
		console.log('You pressed the v key');
		avatar.headGeyser.flow(1000, 500, 15, -1);
	}
	bAction() {
		console.log('You pressed the b key');
		avatar.chestGeyser.flow(1000, 500, 15, -1);
	}
	mAction() {
		console.log('You pressed the m key');
		avatar.arm1Geyser.flow(1000, 500, 15, -1);
	}
	nAction() {
		console.log('You pressed the n key')
		avatar.arm2Geyser.flow(1000, 500, 15, -1);
	}
	cAction() {
		console.log('You pressed the c key');
		avatar.leg1Geyser.flow(1000, 500, 15, -1);
	}
	xAction() {
		console.log('You pressed the x key');
		avatar.leg2Geyser.flow(1000, 500, 15, -1);
	}
	zAction() {
		console.log('You pressed the x key');
		avatar.torsoGeyser.flow(1000, 500, 15, -1);
	}
	spaceAction() {
		this.player.characterBox.body.velocity.y = 0;
		this.player.characterBox.body.velocity.y -= 400;
		data.jump.play();
		console.log('You pressed the space key');
	}
}