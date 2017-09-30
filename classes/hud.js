class HUD {
	constructor() {
		this.menu = game.add.button(15, 345, 'menu', this.actionOnClick, this, 2, 1, 0);
		this.menu.onInputOver.add(this.over, this);
		this.menu.onInputOut.add(this.out, this);
		this.menu.scale.setTo(.15, .15);
		this.menu.alpha = .5;

		this.inventory = game.add.button(45, 345, 'inventory', this.actionOnClick, this, 2, 1, 0);
		this.inventory.onInputOver.add(this.over, this);
		this.inventory.onInputOut.add(this.out, this);
		this.inventory.scale.setTo(.15, .15);
		this.inventory.alpha = .5;
	}
	over() {
		console.log('button over: ' + arguments[0].key);
		arguments[0].alpha = 1;
	}
	out() {
		console.log('button out: ' + arguments[0].key);
		arguments[0].alpha = .5;
	}
	actionOnClick() {
		console.log('You just clicked: ' + arguments[0].key);
	}
}