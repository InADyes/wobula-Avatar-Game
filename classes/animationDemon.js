class animationDemon {
	constructor(avatar, type) {
		this.now = game.time.time;
		this.targetTime = undefined;
		this.avatar = avatar;
		this.walkSetup(this.avatar);
		this.waveRightSetup(this.avatar);
		this.waveLeftSetup(this.avatar);
		this.breathSetup(this.avatar);
		this.wingFlySetup(this.avatar);
	}
	walk(direction) {
		this.walkArms(direction, this.avatar);
		this.walkLegs(direction, this.avatar);
	}
	wingFlySetup(avatar) {
		avatar.characterWingR.angle = -10;
		avatar.characterWingL.angle = 10;
		this.wingR = game.add.tween(avatar.characterWingR);
		this.wingR.to({angle: -10}, 45, Phaser.Easing.Quadratic.InOut);
		this.wingL = game.add.tween(avatar.characterWingL);
		this.wingL.to({angle: 10}, 45, Phaser.Easing.Quadratic.InOut);

		this.wingRRev = game.add.tween(avatar.characterWingR);
		this.wingRRev.to({angle: -60}, 45, Phaser.Easing.Quadratic.InOut);
		this.wingLRev = game.add.tween(avatar.characterWingL);
		this.wingLRev.to({angle: 60}, 45, Phaser.Easing.Quadratic.InOut);
	}
	wingFly() {
		console.log(this.avatar.characterWingR.angle);
		if (this.avatar.characterWingR.angle == -60) {
			this.wingR.start();
			this.wingL.start();
		} else if (avatar.characterWingR.angle == -10) {
			this.wingRRev.start();
			this.wingLRev.start();
		}
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
		} else if (avatar.characterArm1.angle == -110) {
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
		this.breathIn.to({x: 1.2, y: 1.2}, 1000, Phaser.Easing.Linear.None);
		this.breathOut = game.add.tween(avatar.characterChest.scale);
		this.breathOut.to({x: 1, y: 1}, 4000, Phaser.Easing.Linear.None);
	}
	walkSetup(avatar) {
		avatar.characterLeg1.angle = -20;
		this.leg1 = game.add.tween(avatar.characterLeg1);
		this.leg1.to({angle: 20}, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2 = game.add.tween(avatar.characterLeg2);
		this.leg2.to({angle: 20}, 550, Phaser.Easing.Quadratic.InOut);

		this.leg1Rev = game.add.tween(avatar.characterLeg1);
		this.leg1Rev.to({angle: -20}, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2Rev = game.add.tween(avatar.characterLeg2);
		this.leg2Rev.to({angle: -20}, 550, Phaser.Easing.Quadratic.InOut);

		avatar.characterArm1.angle = -10;
		this.arm1 = game.add.tween(avatar.characterArm1);
		this.arm1.to({angle: -110}, 550, Phaser.Easing.Quadratic.InOut);
		this.arm1Rev = game.add.tween(avatar.characterArm1);
		this.arm1Rev.to({angle: -10}, 550, Phaser.Easing.Quadratic.InOut);

		this.arm2 = game.add.tween(avatar.characterArm2);
		this.arm2.to({angle: -10}, 550, Phaser.Easing.Quadratic.InOut);
		this.arm2Rev = game.add.tween(avatar.characterArm2);
		this.arm2Rev.to({angle: 90}, 550, Phaser.Easing.Quadratic.InOut);
	}
	waveLeftSetup(avatar) {
		this.arm1Wave = game.add.tween(avatar.characterArm1);
		this.arm1Wave.to({angle: 180}, 600, Phaser.Easing.Linear.None);
		this.waveSidetoSide(5, 'left');
		this.arm1Wave.to({angle: -10}, 600, Phaser.Easing.Linear.None);
	}
	waveRightSetup(avatar) {
		this.arm2Wave = game.add.tween(avatar.characterArm2);
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