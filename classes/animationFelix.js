class animationFelix {
	constructor(avatar) {
		this.now = game.time.time;
		this.targetTime = undefined;
		this.avatar = avatar;
	}
	processor() {
		if (this.avatar.characterBox.body.velocity.x < 0) {
			this.avatar.characterHead.loadTexture('charFelixHeadL', 0);
			this.avatar.characterBody.loadTexture('charFelixBodyL', 0);

		}
		else if (this.avatar.characterBox.body.velocity.x > 0) {
			this.avatar.characterHead.loadTexture('charFelixHeadR', 0);
			this.avatar.characterBody.loadTexture('charFelixBodyR', 0);
		}
		else {
			this.avatar.characterHead.loadTexture('charFelixHead', 0);
			this.avatar.characterBody.loadTexture('charFelixBody', 0);
		}
	}
	qAction() {
		console.log('You pressed the q key');
		this.avatar.characterArmLJoint1.angle += 5;
	}
	wAction() {
		console.log('You pressed the w key');
		this.avatar.characterArmLJoint1.angle -= 5;
	}
	aAction() {
		console.log('You pressed the a key');
		this.avatar.characterArmLJoint2.angle += 5;
	}
	sAction() {
		console.log('You pressed the s key');
		this.avatar.characterArmLJoint2.angle -= 5;
	}
	zAction() {
		console.log('You pressed the z key');
		console.log(this.avatar.characterArmLHandTop.angle);
		console.log(this.avatar.characterArmLHandBot.angle);
		if (this.avatar.characterArmLHandBot.angle == 50) {
			this.avatar.characterArmLHandBot.angle = -20;
			this.avatar.characterArmLHandTop.angle = 20;
		} else {
			this.avatar.characterArmLHandBot.angle = 50;
			this.avatar.characterArmLHandTop.angle = -50;
		}
	}
	spaceAction() {
		console.log('You pressed the space key');
		this.avatar.characterBox.body.velocity.y = 0;
		this.avatar.characterBox.body.velocity.y -= 400;
		data.jump.play();
	}
}