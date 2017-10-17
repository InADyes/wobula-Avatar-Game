class animationStar {
	constructor(avatar) {
		this.now = game.time.time;
		this.targetTime = undefined;
        this.avatar = avatar;
        this.childstarjumpsetup();
		
	}

	processor(){
        this.childstarjump.start();
    }

    childstarjumpsetup(){
        this.childstarjump = game.add.tween(avatar.childstar);
        this.childstarjump.to({y: -20}, 400, Phaser.Easing.Quadratic.InOut).to({y: 0}, 100, );
    }

	
}