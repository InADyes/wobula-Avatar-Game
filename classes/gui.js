class GUI {
	constructor() {
		this.menuBtn = game.add.button(15, 345, 'menu', this.actionOnClick, this, 2, 1, 0);
		this.menuBtn.onInputOver.add(this.over, this);
		this.menuBtn.onInputOut.add(this.out, this);
		this.menuBtn.scale.setTo(.2, .2);
		this.menuBtn.alpha = .5;

		this.invenBtn = game.add.button(45, 345, 'inventory', this.invenBtnAction, this, 2, 1, 0);
		this.invenBtn.onInputOver.add(this.over, this);
		this.invenBtn.onInputOut.add(this.out, this);
		this.invenBtn.scale.setTo(.2, .2);
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

		this.group = game.add.group();
		this.group.inputEnableChildren = true;
		this.group.add(this.chest);
		this.group.add(this.feet);
		this.group.add(this.hands);
		this.group.add(this.head);
		this.group.add(this.legs);

		this.chest.input.enableDrag();
		this.chest.events.onDragStart.add(this.onDragStart, this);
		this.chest.events.onDragStop.add(this.onDragStop, this);
	}
	makeInventory() {
		this.background = game.add.button(30, 195, 'inventoryBG', this.actionOnClick, this, 2, 1, 0);
		this.background.scale.setTo(1.2, 1.2);
		this.background.alpha = 0;
		this.avatar = game.add.button(78, 210, 'stick', this.actionOnClick, this, 2, 1, 0);
		this.avatar.scale.setTo(.4, .4);
		this.avatar.alpha = 0;
		this.chest = game.add.button(135, 250, 'shirt', this.actionOnClick, this, 2, 1, 0);
		this.chest.scale.setTo(.2, .2);
		this.chest.alpha = 0;
		this.feet = game.add.button(45, 295, 'shoes', this.actionOnClick, this, 2, 1, 0);
		this.feet.scale.setTo(.2, .2);
		this.feet.alpha = 0;
		this.hands = game.add.button(45, 250, 'gloves', this.actionOnClick, this, 2, 1, 0);
		this.hands.scale.setTo(.2, .2);
		this.hands.alpha = 0;
		this.head = game.add.button(135, 210, 'hat', this.actionOnClick, this, 2, 1, 0);
		this.head.scale.setTo(.2, .2);
		this.head.alpha = 0;
		this.legs = game.add.button(135, 290, 'pants', this.actionOnClick, this, 2, 1, 0);
		this.legs.scale.setTo(.2, .2);
		this.legs.alpha = 0;

		this.result;
	}
	onDragStart(sprite, pointer) {
		this.result = 'Dragging ' + sprite.key;
	}
	onDragStop(sprite, pointer) {
		this.result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;
		console.log(this.result);

		if (pointer.y > 400)
		{
			console.log('input disabled on', sprite.key);
			sprite.input.enabled = false;

			sprite.sendToBack();
		}
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
			data.invenOpen.play();
		}
		else {
			this.avatar.alpha = 0;
			this.background.alpha = 0;
			this.chest.alpha = 0;
			this.feet.alpha = 0;
			this.hands.alpha = 0;
			this.head.alpha = 0;
			this.legs.alpha = 0;
			data.invenClose.play();
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