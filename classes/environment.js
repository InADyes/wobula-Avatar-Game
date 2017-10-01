class environment {
	constructor(type) {
		this.background = game.add.sprite(0, 0, 'background');
		console.log('Environment: ' + type);
		this.floorCore;
		this.floorTop;
		if (type == 'grassy')
			this.grassy();
		else if (type == 'desert')
			this.desert();
		this.floor = game.add.physicsGroup();
		this.floor.add(this.floorCore);
		this.floor.add(this.floorTop);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.floor.setAll('body.allowGravity', false);
		this.floor.setAll('body.immovable', true);
	}
	grassy() {
		this.floorCore = game.add.tileSprite(0, 350, 600, 20, 'bgCoreGrassy');
		this.floorTop = game.add.tileSprite(0, 340, 600, 10, 'bgTopGrassy');
	}
	desert() {
		this.floorCore = game.add.tileSprite(0, 350, 600, 20, 'bgCoreDesert');
		this.floorTop = game.add.tileSprite(0, 340, 600, 10, 'bgTopDesert');
	}
}