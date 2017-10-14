class animationTiger {
	constructor(avatar) {
		this.now = game.time.time;
		this.targetTime = undefined;
		this.avatar = avatar;
		this.walkSetup(this.avatar);
		this.waveRightSetup(this.avatar);
		this.waveLeftSetup(this.avatar);
		this.breathSetup(this.avatar);
		this.walkBouncesetup(this.avatar);
	}

	processor() {
		if (this.avatar.characterBox.body.velocity.x != 0)
			{
			this.walk();
			this.walkBounce();
			}
	}

	walk(direction) {
		this.walkArms(direction, this.avatar);
		this.walkLegs(direction, this.avatar);
	}
	waveLeft() {
		this.arm1Wave.start();
	}
	waveRight() {
		this.arm2Wave.start();
	}
	walkArms(direction) {
		if (this.avatar.characterArm1.angle == -10) {
			this.arm1.start();
			this.arm2Rev.start();
		} else if (avatar.characterArm1.angle == -30) {
			this.arm2.start();
			this.arm1Rev.start();
		}
	}
	walkLegs() {
		if (avatar.characterLeg1.angle == -20) {
			this.leg1.start();
			this.leg2Rev.start();
		} else if (avatar.characterLeg1.angle == 20) {
			this.leg1Rev.start();
			this.leg2.start();
		}
	}
	breathe() {
		if (avatar.characterChest.scale.x == 1.2)
			this.breathOut.start();
		else if (avatar.characterChest.scale.x == 1)
			this.breathIn.start();
	}
	breathSetup(avatar) {
		this.breathIn = game.add.tween(avatar.characterChest.scale);
		this.breathIn.to({ x: 1.2, y: 1.2 }, 1000, Phaser.Easing.Linear.None);
		this.breathOut = game.add.tween(avatar.characterChest.scale);
		this.breathOut.to({ x: 1, y: 1 }, 4000, Phaser.Easing.Linear.None);
	}
	walkSetup(avatar) {
		avatar.characterLeg1.angle = -20;
		this.leg1 = game.add.tween(avatar.characterLeg1);
		this.leg1.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2 = game.add.tween(avatar.characterLeg2);
		this.leg2.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);

		this.leg1Rev = game.add.tween(avatar.characterLeg1);
		this.leg1Rev.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2Rev = game.add.tween(avatar.characterLeg2);
		this.leg2Rev.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);

		avatar.characterArm1.angle = -10;
		this.arm1 = game.add.tween(avatar.characterArm1);
		this.arm1.to({ angle: -30 }, 550, Phaser.Easing.Quadratic.InOut);
		this.arm1Rev = game.add.tween(avatar.characterArm1);
		this.arm1Rev.to({ angle: -10 }, 550, Phaser.Easing.Quadratic.InOut);

		this.arm2 = game.add.tween(avatar.characterArm2);
		this.arm2.to({ angle: -10 }, 550, Phaser.Easing.Quadratic.InOut);
		this.arm2Rev = game.add.tween(avatar.characterArm2);
		this.arm2Rev.to({ angle: 10 }, 550, Phaser.Easing.Quadratic.InOut);
	}
	waveLeftSetup(avatar) {
		this.arm1Wave = game.add.tween(avatar.characterArm1);
		this.arm1Wave.to({ angle: 180 }, 600, Phaser.Easing.Linear.None);
		this.waveSidetoSide(5, 'left');
		this.arm1Wave.to({ angle: -10 }, 600, Phaser.Easing.Linear.None);
	}
	waveRightSetup(avatar) {
		this.arm2Wave = game.add.tween(avatar.characterArm2);
		this.arm2Wave.to({ angle: -180 }, 600, Phaser.Easing.Linear.None);
		this.waveSidetoSide(5, 'right');
		this.arm2Wave.to({ angle: -10 }, 600, Phaser.Easing.Linear.None);
	}
	waveSidetoSide(repeat, side) {
		if (side == 'left') {
			while (repeat > 0) {
				this.arm1Wave.to({ angle: 80 }, 100, Phaser.Easing.Linear.None);
				this.arm1Wave.to({ angle: 140 }, 100, Phaser.Easing.Linear.None);
				repeat--;
			}
		} else if (side == 'right') {
			while (repeat > 0) {
				this.arm2Wave.to({ angle: -80 }, 100, Phaser.Easing.Linear.None);
				this.arm2Wave.to({ angle: -140 }, 100, Phaser.Easing.Linear.None);
				repeat--;
			}
		}
	}
	walkSideToSide(targetTime, direction) {
		this.now = game.time.time;
		if (this.targetTime == undefined) {
			console.log(targetTime);
			this.targetTime = game.time.time + targetTime;
		}
		if (this.now < this.targetTime) {
			if (direction == 'right')
				controls.w.isDown = true;
			else
				controls.q.isDown = true;
			return (1);
		}
		if (controls.w.isDown == true)
			controls.w.isDown = false;
		else if (controls.q.isDown = true)
			controls.q.isDown = false;
		this.targetTime = undefined;
		return (0);
	}

	walkBouncesetup(avatar) {

		this.headbounceup = game.add.tween(avatar.characterHead);
		this.chestbounceup = game.add.tween(avatar.characterChest);
		this.headbounceup.to({ y: -33 }, 400, Phaser.Easing.Linear.None);
		this.chestbounceup.to({ y: -3 }, 400, Phaser.Easing.Linear.None);

		this.headbouncedown = game.add.tween(avatar.characterHead);
		this.chestbouncedown = game.add.tween(avatar.characterChest);
		this.headbouncedown.to({ y: -30 }, 400, Phaser.Easing.Linear.None);
		this.chestbouncedown.to({ y: 0 }, 400, Phaser.Easing.Linear.None);
	}

	walkBounce() {
		if (avatar.characterHead.y == -30) {
			this.headbounceup.start();
			this.chestbounceup.start();
		}
		if (avatar.characterHead.y == -33) {
			this.headbouncedown.start();
			this.chestbouncedown.start();
		}
	}

	randomWalk() {
		if ((avatar.animations.walkSideToSide(random(5000, 200), direction)) == 0) {
			if (random(6, 1) > 3)
				direction = 'right';
			else
				direction = 'left';
			console.log(direction);
		}
	}
}