class star {
	constructor(name) {
		this.name = name;
		//this.facing = 0;
		this.addBodyParts();
		this.bindBody();
		this.physics();

		
		//this.animations = new animation(this, 'player');
    }
    addBodyParts() {
		this.characterBox = game.add.sprite(50, 100);
        this.starsprite = game.add.sprite(0,0, 'star');
        //this.starsprite.scale.setTo(0.6, 0.6);
        this.childstar = game.add.sprite(0,0, 'laugh');
        this.childstar.scale.setTo(0.5,0.5);
	}
	

	

	bindBody() {
        this.characterBox.addChild(this.starsprite);
        this.characterBox.addChild(this.childstar);
		
	}
	physics() {
		game.physics.enable(this.characterBox, Phaser.Physics.ARCADE);
		this.characterBox.body.collideWorldBounds = true;
		this.characterBox.body.gravity.y = 500;
		this.characterBox.body.bounce.y = 0.6;
	}

}