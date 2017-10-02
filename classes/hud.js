class HUD {
	constructor(test) {
		this.menu = game.add.sprite(15, 345, 'menu');
		this.menu.scale.setTo(.15, .15);
		this.menu.inputEnabled = true;
		this.menu.alpha = .5;
		this.inventory = game.add.sprite(45, 345, 'inventory');
		this.inventory.scale.setTo(.15, .15);
		this.inventory.inputEnabled = true;
		this.inventory.alpha = .5;
		game.input.addMoveCallback(this.p, test);
	}
	p(pointer) {
		if (pointer)
			console.log(pointer);
	}
	mouseOver() {
		if (this.menu.input.pointerOver())
			this.menu.alpha = 1;
		else
			this.menu.alpha = .5;
		if (this.inventory.input.pointerOver())
			this.inventory.alpha = 1;
		else
			this.inventory.alpha = .5;
	}
}