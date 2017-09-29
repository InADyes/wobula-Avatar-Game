class HUD {
	constructor(type) {
		if (type == 'grassy') {
			console.log('Environment: grassy');
			this.background = game.add.sprite(0, 0, 'background');
			this.floorCore = game.add.tileSprite(0, 350, 600, 20, 'bgCore');
			this.floorTop = game.add.tileSprite(0, 340, 600, 10, 'bgTop');
			this.floor = game.add.physicsGroup();
			this.floor.add(this.floorCore);
			this.floor.add(this.floorTop);
			game.physics.startSystem(Phaser.Physics.ARCADE);
			this.floor.setAll('body.allowGravity', false);
			this.floor.setAll('body.immovable', true);
		}
	}
}