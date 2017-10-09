class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.z;
		this.x;
		this.c;
		this.b;
		this.n;
		this.h;
		this.g;
		this.space;
		this.instantiateKeys();
		this.keys = [];
		this.keys.push(this.space, this.z, this.x, this.c, this.n, this.b, this.h, this.g);
		console.log(this.player);
	}
	instantiateKeys() {
		this.v = game.input.keyboard.addKey(Phaser.Keyboard.V)
		this.v.press = false;
		this.v.action = () => { this.vAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.V]);
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
		this.b = game.input.keyboard.addKey(Phaser.Keyboard.B);
		this.b.press = false;
		this.b.action = () => { this.bAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.N]);
		this.n = game.input.keyboard.addKey(Phaser.Keyboard.N);
		this.n.press = false;
		this.n.action = () => { this.nAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.G]);
		this.g = game.input.keyboard.addKey(Phaser.Keyboard.G);
		this.g.press = false;
		this.g.action = () => { this.gAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.H]);
		this.h = game.input.keyboard.addKey(Phaser.Keyboard.H);
		this.h.press = false;
		this.h.action = () => { this.hAction(); };
	}
	processor() {
		this.cursorPad();
		for (var i = this.keys.length - 1; i >= 0; i--)
			this.keyPress(this.keys[i]);
		if (this.player.characterBox.position.x < 10)
			this.player.characterBox.position.x = 434;
		else if (this.player.characterBox.position.x > 435)
			this.player.characterBox.position.x = 11;
	}
	cursorPad() {
		if (this.cursors.up.isDown)
			this.player.characterBox.body.velocity.y -= 1;
		if (this.cursors.down.isDown)
			this.player.characterBox.body.velocity.y += 1;
		if (this.cursors.left.isDown) {

			this.player.characterBox.body.velocity.x -= 5;
			this.player.characterLegLBack2.angle -= 1;
			//this.player.animations.walk();
		}
		if (this.cursors.right.isDown) {
			this.player.characterBox.body.velocity.x += 5;
			this.player.characterLegLBack2.angle += 1;

			//this.player.animations.walk();
		}
		if (this.cursors.left.isUp && this.player.characterBox.body.velocity.x < 0)
			this.player.characterBox.body.velocity.x += 5;
		if (this.cursors.right.isUp && this.player.characterBox.body.velocity.x > 0)
			this.player.characterBox.body.velocity.x -= 5;
		if (this.b.isDown) {
			this.bAction();
		}
		if (this.n.isDown) {
			this.nAction();
		}
		if (this.g.isDown) {
			this.gAction();
		}
		if (this.h.isDown) {
			this.hAction();
		}
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
	nAction() {
		console.log('n key');
		this.player.characterLegLBack2.angle -= 1;
	}
	bAction() {
		console.log('b key');
		this.player.characterLegLBack2.angle += 1;
	}
	gAction() {
		console.log('g key');
		this.player.characterLegLBack1.angle -= 1;
	}
	hAction() {
		console.log('h key');
		this.player.characterLegLBack1.angle += 1;
	vAction(){
		console.log('You pressed the v key');
		//avatar.leftarmGeyser.flow(1000, 500, 15, -1);
		//avatar.rightarmGeyser.flow(1000, 500, 15, -1);
		//avatar.leftlegGeyser.flow(1000, 500, 15, -1);
		avatar.rightlegGeyser.flow(1000, 500, 15, -1);
	}
	spaceAction() {
		this.player.characterBox.body.velocity.y = 0;
		this.player.characterBox.body.velocity.y -= 400;
		data.jump.play();
		console.log('You pressed the space key');
	}
}
