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
		if (this.avatar.characterArm1left.angle == 20) {
			this.arm1.start();
			this.arm2Rev.start();
			this.arm11.start();
			this.arm21Rev.start();
		} else if (avatar.characterArm1left.angle == -20) {
			this.arm2.start();
			this.arm1Rev.start();
			this.arm21.start();
			this.arm11Rev.start();
		}
	}
	walkLegs() {
		if (avatar.characterLeg1left.angle == -20) {
			this.leg1.start();
			this.leg2Rev.start();
			this.leg11.start();
			this.leg21Rev.start();
		} else if (avatar.characterLeg1left.angle == 20) {
			this.leg1Rev.start();
			this.leg2.start();
			this.leg11Rev.start();
			this.leg21.start();
		}
	}
	breathe() {
		if (avatar.characterChestleft.scale.x == 1.2)
			this.breathOut.start();
		else if (avatar.characterChestleft.scale.x == 1)
			this.breathIn.start();
	}
	breathSetup(avatar) {
		this.breathIn = game.add.tween(avatar.characterChestleft.scale);
		this.breathIn.to({ x: 1.2, y: 1.2 }, 1000, Phaser.Easing.Linear.None);
		this.breathOut = game.add.tween(avatar.characterChestleft.scale);
		this.breathOut.to({ x: 1, y: 1 }, 4000, Phaser.Easing.Linear.None);
	}
	walkSetup(avatar) {
		//left
		avatar.characterLeg1left.angle = -20;
		this.leg1 = game.add.tween(avatar.characterLeg1left);
		this.leg1.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2 = game.add.tween(avatar.characterLeg2left);
		this.leg2.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);

		this.leg1Rev = game.add.tween(avatar.characterLeg1left);
		this.leg1Rev.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.leg2Rev = game.add.tween(avatar.characterLeg2left);
		this.leg2Rev.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);

		avatar.characterArm1left.angle = 20;
		this.arm1 = game.add.tween(avatar.characterArm1left);
		this.arm1.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.arm1Rev = game.add.tween(avatar.characterArm1left);
		this.arm1Rev.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);

		this.arm2 = game.add.tween(avatar.characterArm2left);
		this.arm2.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.arm2Rev = game.add.tween(avatar.characterArm2left);
		this.arm2Rev.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);
		
		//right
		avatar.characterLeg1right.angle = -20;
		this.leg11 = game.add.tween(avatar.characterLeg1right);
		this.leg11.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.leg21 = game.add.tween(avatar.characterLeg2right);
		this.leg21.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);

		this.leg11Rev = game.add.tween(avatar.characterLeg1right);
		this.leg11Rev.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.leg21Rev = game.add.tween(avatar.characterLeg2right);
		this.leg21Rev.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);

		avatar.characterArm1right.angle = 20;
		this.arm11 = game.add.tween(avatar.characterArm1right);
		this.arm11.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.arm11Rev = game.add.tween(avatar.characterArm1right);
		this.arm11Rev.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);

		this.arm21 = game.add.tween(avatar.characterArm2right);
		this.arm21.to({ angle: -20 }, 550, Phaser.Easing.Quadratic.InOut);
		this.arm21Rev = game.add.tween(avatar.characterArm2right);
		this.arm21Rev.to({ angle: 20 }, 550, Phaser.Easing.Quadratic.InOut);
	}
	waveLeftSetup(avatar) {
		this.arm1Wave = game.add.tween(avatar.characterArm1left);
		this.arm1Wave.to({ angle: 180 }, 600, Phaser.Easing.Linear.None);
		this.waveSidetoSide(5, 'left');
		this.arm1Wave.to({ angle: -10 }, 600, Phaser.Easing.Linear.None);
	}
	waveRightSetup(avatar) {
		this.arm2Wave = game.add.tween(avatar.characterArm2left);
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

		this.headbounceup = game.add.tween(avatar.characterHeadleft);
		this.chestbounceup = game.add.tween(avatar.characterChestleft);
		this.tailbounceup = game.add.tween(avatar.characterPelvisleft);
		this.headbounceup1 = game.add.tween(avatar.characterHeadright);
		this.chestbounceup1 = game.add.tween(avatar.characterChestright);
		this.tailbounceup1 = game.add.tween(avatar.characterPelvisright);
		this.headbounceup.to({ y: -31 }, 400, Phaser.Easing.Linear.None);
		this.chestbounceup.to({ y: 9}, 400, Phaser.Easing.Linear.None);
		this.tailbounceup.to({angle: -10}, 400, Phaser.Easing.Linear.None);
		this.headbounceup1.to({ y: -31 }, 400, Phaser.Easing.Linear.None);
		this.chestbounceup1.to({ y: 9 }, 400, Phaser.Easing.Linear.None);
		this.tailbounceup1.to({angle: 10}, 400, Phaser.Easing.Linear.None);


		this.headbouncedown = game.add.tween(avatar.characterHeadleft);
		this.chestbouncedown = game.add.tween(avatar.characterChestleft);
		this.tailbouncedown = game.add.tween(avatar.characterPelvisleft);
		this.headbouncedown1 = game.add.tween(avatar.characterHeadright);
		this.chestbouncedown1 = game.add.tween(avatar.characterChestright);
		this.tailbouncedown1 = game.add.tween(avatar.characterPelvisright);
		this.headbouncedown.to({ y: -28 }, 400, Phaser.Easing.Linear.None);
		this.chestbouncedown.to({ y: 12 }, 400, Phaser.Easing.Linear.None);
		this.tailbouncedown.to({angle: 0}, 400, Phaser.Easing.Linear.None);
		this.headbouncedown1.to({ y: -28 }, 400, Phaser.Easing.Linear.None);
		this.chestbouncedown1.to({ y: 12 }, 400, Phaser.Easing.Linear.None);
		this.tailbouncedown1.to({angle: 0}, 400, Phaser.Easing.Linear.None);
	}

	walkBounce() {
		if (avatar.characterHeadleft.y == -28) {
			this.headbounceup.start();
			this.chestbounceup.start();
			this.tailbounceup.start();
			this.headbounceup1.start();
			this.chestbounceup1.start();
			this.tailbounceup1.start();
		}
		if (avatar.characterHeadleft.y == -31) {
			this.headbouncedown.start();
			this.chestbouncedown.start();
			this.tailbouncedown.start();
			this.headbouncedown1.start();
			this.chestbouncedown1.start();
			this.tailbouncedown1.start();
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