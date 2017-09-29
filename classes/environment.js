class environment {
	constructor(avatar) {
		this.background = game.add.sprite(0, 0, 'background');
		this.floorCore = game.add.tileSprite(0, 350, 600, 20, 'bgCore');;
		this.floorTop = game.add.tileSprite(0, 340, 600, 10, 'bgTop');
	}
}