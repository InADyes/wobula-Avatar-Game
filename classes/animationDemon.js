class animationDemon {
	constructor(avatar, type) {
		this.now = game.time.time;
		this.targetTime = undefined;
		this.avatar = avatar;
		this.targetTime = undefined;
		this.headPresent = 1;
		this.walkSetup();
		this.waveSetup();
		this.wingWaveSetup();
		this.wingFlySetup();
		this.defaultGroundWingSetup();
		this.fallOverSetup();
	}
	processor() {
		this.checkAirStatus(game.time.time);
		if (this.avatar.characterBox.position.y < 320)
			this.wingFly();
		if (this.avatar.characterBox.body.velocity.x != 0)
			this.walk();
		if (this.avatar.characterBox.body.velocity.x < 0 && this.headPresent == 1)
			this.avatar.characterHead.loadTexture('charDemonHeadL', 0);
		else if (this.avatar.characterBox.body.velocity.x > 0 && this.headPresent == 1)
			this.avatar.characterHead.loadTexture('charDemonHeadR', 0);
		else if (this.headPresent == 1)
			this.avatar.characterHead.loadTexture('charDemonHead', 0);
	}
	checkAirStatus(time) {
		if (this.avatar.characterBox.position.y > 320 && this.avatar.characterWingR.angle != 40 && this.targetTime == undefined)
			this.targetTime = game.time.time + 200;
		if (this.targetTime != undefined && this.targetTime < game.time.time && this.wingDefault == 0) {
			this.wingGround();
			this.wingDefault = 1;
		}
		if (this.avatar.characterBox.position.y < 320) {
			this.targetTime = undefined;
			this.wingDefault = 0;
		}
	}
	defaultGroundWingSetup() {
		this.wingGroundR = game.add.tween(this.avatar.characterWingR);
		this.wingGroundL = game.add.tween(this.avatar.characterWingL);
		this.wingGroundR.to({angle: 40}, 550, Phaser.Easing.Linear.None);
		this.wingGroundL.to({angle: -40}, 550, Phaser.Easing.Linear.None);
	}
	wingGround() {
		this.wingGroundR.start();
		this.wingGroundL.start();
	}
	fallOverSetup() {
		console.log(this.avatar.characterBox);
		this.fallOver = game.add.tween(this.avatar.characterBox);
		this.riseUp = game.add.tween(this.avatar.characterBox);

		this.fallOver.to({rotation: .1}, 3000, Phaser.Easing.Linear.None).to({rotation: 1.7}, 500, Phaser.Easing.Linear.None);
		this.riseUp.to({rotation: 0}, 2000, Phaser.Easing.Linear.None);
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
	wingWaveSetup() {
		this.wingLWave = game.add.tween(this.avatar.characterWingL);
		this.wingLWave.to({angle: 120}, 900, Phaser.Easing.Linear.None);
		this.wingLWave.to({angle: 121}, 400, Phaser.Easing.Linear.None);
		this.wingLWave.to({angle: 40}, 100, Phaser.Easing.Linear.None);
		this.wingLWave.to({angle: 39}, 500, Phaser.Easing.Linear.None);
		this.wingLWave.to({angle: -40}, 1000, Phaser.Easing.Linear.None);

		this.wingRWave = game.add.tween(this.avatar.characterWingR);
		this.wingRWave.to({angle: -120}, 900, Phaser.Easing.Linear.None);
		this.wingRWave.to({angle: -121}, 400, Phaser.Easing.Linear.None);
		this.wingRWave.to({angle: -40}, 100, Phaser.Easing.Linear.None);
		this.wingRWave.to({angle: -39}, 500, Phaser.Easing.Linear.None);
		this.wingRWave.to({angle: 40}, 1000, Phaser.Easing.Linear.None);
	}
	wingWaveRight() {
		this.wingRWave.start();
	}
	wingWaveLeft() {
		this.wingLWave.start();
	}
	waveSetup() {
		this.waveLeftSetup();
		this.waveRightSetup();
	}
	waveLeftSetup() {
		this.arm1Wave = game.add.tween(this.avatar.characterArm1);
		this.arm1Wave.to({angle: 180}, 600, Phaser.Easing.Linear.None);
		this.waveSideToSide(5, 'left');
		this.arm1Wave.to({angle: -10}, 600, Phaser.Easing.Linear.None);
	}
	waveRightSetup() {
		this.arm2Wave = game.add.tween(this.avatar.characterArm2);
		this.arm2Wave.to({angle: -180}, 600, Phaser.Easing.Linear.None);
		this.waveSideToSide(5, 'right');
		this.arm2Wave.to({angle: -10}, 600, Phaser.Easing.Linear.None);
	}
	waveSideToSide(repeat, side) {
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
	qAction() {
		console.log('You pressed the q key');
		this.wingWaveLeft();
	}
	wAction() {
		console.log('You pressed the w key');
		this.wingWaveRight();
	}
	aAction() {
		console.log('You pressed the a key');
		this.waveLeft();
	}
	sAction() {
		console.log('You pressed the s key');
		this.waveRight();
	}
	zAction() {
		console.log('You pressed the head key');
		if (this.headPresent == 1) {
			this.headPresent = 0;
			this.avatar.headGeyser.flow(3000, 500, 100, -1);
			this.avatar.characterHead.loadTexture('headBlank', 0);
			this.fallOver.start();
		} else {
			this.headPresent = 1;
			this.riseUp.start();
			this.avatar.characterHead.loadTexture('charDemonHead', 0);
		}
	}
	spaceAction() {
		console.log('You pressed the space key');
		this.avatar.characterBox.body.velocity.y = 0;
		this.avatar.characterBox.body.velocity.y -= 400;
		this.avatar.characterWingR.angle = -10;
		this.avatar.characterWingL.angle = 10;
		data.jump.play();
	}
}