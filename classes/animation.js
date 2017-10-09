class animation {
	constructor(avatar) {
		this.avatar = avatar;
		this.walkSetup(this.avatar);
	}
	walk(direction) {
		this.walkArms(direction, this.avatar);
		this.walkLegs(direction, this.avatar);
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
	walkLegs(direction) {
		if (avatar.characterLeg1.angle == -10) {
			this.leg1.start();
			this.leg2Rev.start();
		} else if (avatar.characterLeg1.angle == 10) {
			this.leg1Rev.start();
			this.leg2.start();
		}
	}
	walkSetup(avatar) {
		avatar.characterLeg1.angle = -10;
		this.leg1 = game.add.tween(avatar.characterLeg1);
		this.leg1.to({angle: 10}, 500, Phaser.Easing.Linear.None);
		this.leg2 = game.add.tween(avatar.characterLeg2);
		this.leg2.to({angle: 10}, 500, Phaser.Easing.Linear.None);

		this.leg1Rev = game.add.tween(avatar.characterLeg1);
		this.leg1Rev.to({angle: -10}, 500, Phaser.Easing.Linear.None);
		this.leg2Rev = game.add.tween(avatar.characterLeg2);
		this.leg2Rev.to({angle: -10}, 500, Phaser.Easing.Linear.None);

		avatar.characterArm1.angle = -10;
		this.arm1 = game.add.tween(avatar.characterArm1);
		this.arm1.to({angle: -110}, 800, Phaser.Easing.Linear.None);
		this.arm1Rev = game.add.tween(avatar.characterArm1);
		this.arm1Rev.to({angle: -10}, 800, Phaser.Easing.Linear.None);

		this.arm2 = game.add.tween(avatar.characterArm2);
		this.arm2.to({angle: -10}, 800, Phaser.Easing.Linear.None);
		this.arm2Rev = game.add.tween(avatar.characterArm2);
		this.arm2Rev.to({angle: 90}, 800, Phaser.Easing.Linear.None);
	}
}