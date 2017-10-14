class animationDemon {
	constructor(avatar, type) {
		this.now = game.time.time;
		this.targetTime = undefined;
		this.avatar = avatar;
		this.walkSetup();
		this.waveSetup();
		this.wingFlySetup();
	}
	processor() {
		if (this.avatar.characterBox.position.y < 320)
			this.wingFly();
		if (this.avatar.characterBox.body.velocity.x != 0)
			this.walk();
		if (this.avatar.characterBox.body.velocity.x < 0)
			this.avatar.characterHead.loadTexture('charDemonHeadL', 0);
		else if (this.avatar.characterBox.body.velocity.x > 0)
			this.avatar.characterHead.loadTexture('charDemonHeadR', 0);
		else
			this.avatar.characterHead.loadTexture('charDemonHead', 0);
	}
	walkSetup() {
		this.avatar.characterLeg1.angle = -20;
		this.leg1 = game.add.tween(this.avatar.characterLeg1);
		this.leg1.to({angle: 20}, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2 = game.add.tween(this.avatar.characterLeg2);
		this.leg2.to({angle: 20}, 550, Phaser.Easing.Quadratic.InOut);

		this.leg1Rev = game.add.tween(this.avatar.characterLeg1);
		this.leg1Rev.to({angle: -20}, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2Rev = game.add.tween(this.avatar.characterLeg2);
		this.leg2Rev.to({angle: -20}, 550, Phaser.Easing.Quadratic.InOut);

		this.avatar.characterArm1.angle = -10;
		this.arm1 = game.add.tween(this.avatar.characterArm1);
		this.arm1.to({angle: -110}, 550, Phaser.Easing.Quadratic.InOut);
		this.arm1Rev = game.add.tween(this.avatar.characterArm1);
		this.arm1Rev.to({angle: -10}, 550, Phaser.Easing.Quadratic.InOut);

		this.arm2 = game.add.tween(this.avatar.characterArm2);
		this.arm2.to({angle: -10}, 550, Phaser.Easing.Quadratic.InOut);
		this.arm2Rev = game.add.tween(this.avatar.characterArm2);
		this.arm2Rev.to({angle: 90}, 550, Phaser.Easing.Quadratic.InOut);
	}
	walk() {
		this.walkArms();
		this.walkLegs();
	}
	walkArms() {
		if (this.avatar.characterArm1.angle == -10) {
			this.arm1.start();
			this.arm2Rev.start();
		} else if (this.avatar.characterArm1.angle == -110) {
			this.arm2.start();
			this.arm1Rev.start();
		}
	}
	walkLegs() {
		if (this.avatar.characterLeg1.angle == -20) {
			this.leg1.start();
			this.leg2Rev.start();
		} else if (this.avatar.characterLeg1.angle == 20) {
			this.leg1Rev.start();
			this.leg2.start();
		}
	}
	wingFlySetup() {
		this.avatar.characterWingR.angle = -10;
		this.avatar.characterWingL.angle = 10;
		this.wingR = game.add.tween(this.avatar.characterWingR);
		this.wingR.to({angle: -10}, 45, Phaser.Easing.Quadratic.InOut);
		this.wingL = game.add.tween(this.avatar.characterWingL);
		this.wingL.to({angle: 10}, 45, Phaser.Easing.Quadratic.InOut);

		this.wingRRev = game.add.tween(this.avatar.characterWingR);
		this.wingRRev.to({angle: -60}, 45, Phaser.Easing.Quadratic.InOut);
		this.wingLRev = game.add.tween(this.avatar.characterWingL);
		this.wingLRev.to({angle: 60}, 45, Phaser.Easing.Quadratic.InOut);
	}
	wingFly() {
		if (this.avatar.characterWingR.angle == -60) {
			this.wingR.start();
			this.wingL.start();
		} else if (avatar.characterWingR.angle == -10) {
			this.wingRRev.start();
			this.wingLRev.start();
		}
	}
	waveSetup() {
		this.waveLeftSetup();
		this.waveRightSetup();
	}
	waveLeftSetup() {
		this.arm1Wave = game.add.tween(this.avatar.characterArm1);
		this.arm1Wave.to({angle: 180}, 600, Phaser.Easing.Linear.None);
		this.waveSidetoSide(5, 'left');
		this.arm1Wave.to({angle: -10}, 600, Phaser.Easing.Linear.None);
	}
	waveRightSetup() {
		this.arm2Wave = game.add.tween(this.avatar.characterArm2);
		this.arm2Wave.to({angle: -180}, 600, Phaser.Easing.Linear.None);
		this.waveSidetoSide(5, 'right');
		this.arm2Wave.to({angle: -10}, 600, Phaser.Easing.Linear.None);
	}
	waveSidetoSide(repeat, side) {
		if (side == 'left') {
			while (repeat > 0) {
				this.arm1Wave.to({angle: 80}, 100, Phaser.Easing.Linear.None);
				this.arm1Wave.to({angle: 140}, 100, Phaser.Easing.Linear.None);
				repeat--;
			}
		} else if (side == 'right') {
			while (repeat > 0) {
				this.arm2Wave.to({angle: -80}, 100, Phaser.Easing.Linear.None);
				this.arm2Wave.to({angle: -140}, 100, Phaser.Easing.Linear.None);
				repeat--;
			}
		}
	}
	waveLeft() {
		this.arm1Wave.start();
	}
	waveRight() {
		this.arm2Wave.start();
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