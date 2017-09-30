class HUD {
	constructor() {
		this.menuBtn = game.add.button(15, 345, 'menu', this.actionOnClick, this, 2, 1, 0);
		this.menuBtn.onInputOver.add(this.over, this);
		this.menuBtn.onInputOut.add(this.out, this);
		this.menuBtn.scale.setTo(.15, .15);
		this.menuBtn.alpha = .5;

		this.invenBtn = game.add.button(45, 345, 'inventory', this.invenBtnAction, this, 2, 1, 0);
		this.invenBtn.onInputOver.add(this.over, this);
		this.invenBtn.onInputOut.add(this.out, this);
		this.invenBtn.scale.setTo(.15, .15);
		this.invenBtn.alpha = .5;
		this.invenBtn.action = () => { this.invenBtnAction(); };

		this.hat;
		this.shoes;
		this.shirt;
		this.pants;
		this.inventory = this.makeInventory();
	}
	makeInventory() {
		this.hat = game.add.button(45, 315, 'menu', this.actionOnClick, this, 2, 1, 0);
		//this.hat.onInputOver.add(this.over, this);
		//this.hat.onInputOut.add(this.out, this);
		this.hat.scale.setTo(.15, .15);
		this.hat.alpha = 0;
	}
	invenBtnAction() {
		console.log('You just clicked: ' + arguments[0].key);
		if (this.hat.alpha == 0)
			this.hat.alpha = 1;
		else
			this.hat.alpha = 0;
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