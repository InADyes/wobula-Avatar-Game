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

		this.avatar;
		this.chest;
		this.feet;
		this.hands;
		this.head;
		this.legs;
		this.background;
		this.inventory = this.makeInventory();
	}
	makeInventory() {
		this.background = game.add.button(35, 185, 'inventoryBG', this.actionOnClick, this, 2, 1, 0);
		this.background.scale.setTo(1.5, 1.5);
		this.background.alpha = 0;
		this.avatar = game.add.button(80, 200, 'stick', this.actionOnClick, this, 2, 1, 0);
		this.avatar.scale.setTo(.4, .4);
		this.avatar.alpha = 0;
		this.chest = game.add.button(135, 240, 'shirt', this.actionOnClick, this, 2, 1, 0);
		this.chest.scale.setTo(.17, .17);
		this.chest.alpha = 0;
		this.feet = game.add.button(45, 285, 'shoes', this.actionOnClick, this, 2, 1, 0);
		this.feet.scale.setTo(.15, .15);
		this.feet.alpha = 0;
		this.hands = game.add.button(45, 240, 'gloves', this.actionOnClick, this, 2, 1, 0);
		this.hands.scale.setTo(.19, .19);
		this.hands.alpha = 0;
		this.head = game.add.button(135, 200, 'hat', this.actionOnClick, this, 2, 1, 0);
		this.head.scale.setTo(.19, .19);
		this.head.alpha = 0;
		this.legs = game.add.button(135, 280, 'pants', this.actionOnClick, this, 2, 1, 0);
		this.legs.scale.setTo(.28, .28);
		this.legs.alpha = 0;
	}
	invenBtnAction() {
		console.log('You just clicked: ' + arguments[0].key);
		if (this.avatar.alpha == 0) {
			this.avatar.alpha = 1;
			this.background.alpha = 1;
			this.chest.alpha = 1;
			this.hands.alpha = 1;
			this.head.alpha = 1;
			this.feet.alpha = 1;
			this.legs.alpha = 1;
		}
		else {
			this.avatar.alpha = 0;
			this.background.alpha = 0;
			this.chest.alpha = 0;
			this.feet.alpha = 0;
			this.hands.alpha = 0;
			this.head.alpha = 0;
			this.legs.alpha = 0;
		}
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