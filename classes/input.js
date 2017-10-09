class input {
	constructor(avatar) {
		this.player = avatar;
		this.cursors = game.input.keyboard.createCursorKeys();
		this.z;
		this.x;
		this.c;
		this.v;
		this.space;
		this.instantiateKeys();
		this.keys = [];
		this.keys.push(this.space, this.z, this.x, this.c, this.v, this.s, this.q, this.w);
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
		this.s = game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.s.press = false;
		this.s.action = () => { this.sAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.S]);

		this.q = game.input.keyboard.addKey(Phaser.Keyboard.Q)
		this.q.press = false;
		this.q.action = () => { this.qAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.Q]);

		this.w = game.input.keyboard.addKey(Phaser.Keyboard.W)
		this.w.press = false;
		this.w.action = () => { this.wAction(); };
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.w]);
	}
	processor() {
		this.cursorPad();
		for (var i = this.keys.length - 1; i >= 0; i--)
			this.keyPress(this.keys[i]);
	/*	
		for (let presstimes = 0; presstimes < 500; presstimes++) {
			if(presstimes % 100 == 0)
				{
				this.loopanimate();
				//console.log('execute');
				}
				else
					continue;
		}
*/
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
			this.player.characterHead.loadTexture('char1HeadLeft', 0);
			this.player.characterBox.body.velocity.x -= 5;
			this.player.animations.walk();
			console.log(this.player);
		}
		if (this.cursors.right.isDown) {
			this.player.characterHead.loadTexture('char1HeadRight', 0);
			this.player.characterBox.body.velocity.x += 5;
			this.player.animations.walk();
			console.log(this.player);
		}
		if (this.cursors.left.isUp && this.player.characterBox.body.velocity.x < 0) {
			this.player.characterBox.body.velocity.x += 5;
			this.player.characterHead.loadTexture('char1Head', 0);
		}
		if (this.cursors.right.isUp && this.player.characterBox.body.velocity.x > 0) {
			this.player.characterHead.loadTexture('char1Head', 0);
			this.player.characterBox.body.velocity.x -= 5;
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
		//avatar.pelvisGeyser.flow(1000, 500, 15, -1);
		this.autoAnimating();
	}
	vAction() {
		console.log('You pressed the v key');
		avatar.leftarmGeyser.flow(1000, 500, 15, -1);
		avatar.rightarmGeyser.flow(1000, 500, 15, -1);
		avatar.leftlegGeyser.flow(1000, 500, 15, -1);
		avatar.rightlegGeyser.flow(1000, 500, 15, -1);
	}

	spaceAction() {
		this.player.characterBox.body.velocity.y = 0;
		this.player.characterBox.body.velocity.y -= 400;
		data.jump.play();
		console.log('You pressed the space key');
	}

	autoAnimating() {
		var direction = 1000 * Math.random();
		if (direction < 500) {
			this.player.characterBox.body.velocity.x -= 50;
			this.player.animations.walk();

		}
		else {
			this.player.characterBox.body.velocity.x += 50;
			this.player.animations.walk();
		}
		console.log(direction);

	}
	loopanimate() {
		this.c.press = true;
		//this.sleep(1000);
	}

	qAction() {
		console.log('You pressed q key');
		this.player.characterHead.loadTexture('char1HeadLeft', 0);
		this.player.characterBox.body.velocity.x -= 5;
		this.player.animations.walk();
	}
	wAction() {
		console.log('You pressed w key');
		this.player.characterHead.loadTexture('char1HeadRight', 0);
		this.player.characterBox.body.velocity.x += 5;
		this.player.animations.walk();
	}
}


