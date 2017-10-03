class GUI {
	constructor() {
		this.menuBtn = game.add.button(15, 345, 'menu', this.menuBtnAction, this, 2, 1, 0);
		this.menuBtn.onInputOver.add(this.over, this);
		this.menuBtn.onInputOut.add(this.out, this);
		this.menuBtn.scale.setTo(.2, .2);
		this.menuBtn.alpha = .5;

		this.invenBtn = game.add.button(45, 345, 'inventory', this.invenBtnAction, this, 2, 1, 0);
		this.invenBtn.onInputOver.add(this.over, this);
		this.invenBtn.onInputOut.add(this.out, this);
		this.invenBtn.scale.setTo(.2, .2);
		this.invenBtn.alpha = .5;
		//this.invenBtn.action = () => { this.invenBtnAction(); };

		this.avatar;
		this.chest;
		this.feet;
		this.hands;
		this.head;
		this.legs;
		this.background;
		this.inventory = this.makeInventory();
		this.menu = this.makeBags();

		this.group = game.add.group();
		this.group.inputEnableChildren = true;
		this.group.add(this.chest);
		this.group.add(this.feet);
		this.group.add(this.hands);
		this.group.add(this.head);
		this.group.add(this.legs);

		this.chest.input.enableDrag();
		//this.chest.input.enableSnap(24, 24, false, true);
		this.chest.events.onDragStart.add(this.onDragStart, this);
		this.chest.events.onDragStop.add(this.onDragStop, this);
	}
	//actual size  24 x 24
	makeInventory() {
		this.background2 = game.add.button(30, 195, 'inventoryBG', this.actionOnClick, this, 2, 1, 0);
		this.background2.scale.setTo(1.2, 1.2);
		this.background2.alpha = 0;
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
	//size 36* 36
	makeBags(){
		this.background1 = game.add.button(210, 195, 'inventoryBG', this.actionOnClick, this, 2, 1, 0);
		this.background1.scale.setTo(1.2, 1.2);
		this.background1.alpha = 0;
		this.emptybag1 =  game.add.button(225, 205, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag1.scale.setTo(.3, .3);
		this.emptybag1.alpha = 0;
		this.emptybag2 =  game.add.button(265, 205, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag2.scale.setTo(.3, .3);
		this.emptybag2.alpha = 0;
		this.emptybag3 =  game.add.button(305, 205, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag3.scale.setTo(.3, .3);
		this.emptybag3.alpha = 0;
		this.emptybag4 =  game.add.button(225, 245, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag4.scale.setTo(.3, .3);
		this.emptybag4.alpha = 0;
		this.emptybag5 =  game.add.button(265, 245, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag5.scale.setTo(.3, .3);
		this.emptybag5.alpha = 0;
		this.emptybag6 =  game.add.button(305, 245, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag6.scale.setTo(.3, .3);
		this.emptybag6.alpha = 0;
		this.emptybag7 =  game.add.button(225, 285, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag7.scale.setTo(.3, .3);
		this.emptybag7.alpha = 0;
		this.emptybag8 =  game.add.button(265, 285, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag8.scale.setTo(.3, .3);
		this.emptybag8.alpha = 0;
		this.emptybag9 =  game.add.button(305, 285, 'emptybag', this.actionOnClick, this, 2, 1, 0);
		this.emptybag9.scale.setTo(.3, .3);
		this.emptybag9.alpha = 0;


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
		if (pointer.y != 250 && pointer.x != 135)
			{
			if (pointer.x > 225 && pointer.x < 261 && pointer.y > 205 && pointer.y < 241)
				{
					console.log('in the block');
					this.emptybag1 = this.chest;
					this.emptybag1.x = 232;
					this.emptybag1.y = 212;
				}
			else
				{
					console.log('out block');
					sprite.x = 135;
					sprite.y = 250;
				}
			}
	}
	invenBtnAction() {
		console.log('You just clicked: ' + arguments[0].key);
		if (this.avatar.alpha == 0) {
			this.avatar.alpha = 1;
			this.background2.alpha = 1;
			this.chest.alpha = 1;
			this.hands.alpha = 1;
			this.head.alpha = 1;
			this.feet.alpha = 1;
			this.legs.alpha = 1;
			data.invenOpen.play();
		} else {
			this.avatar.alpha = 0;
			this.background2.alpha = 0;
			this.chest.alpha = 0;
			this.feet.alpha = 0;
			this.hands.alpha = 0;
			this.head.alpha = 0;
			this.legs.alpha = 0;
			data.invenClose.play();
		}
	}
	menuBtnAction(){
		console.log('You just clicked: ' + arguments[0].key);
		if (this.background1.alpha == 0) {
			this.background1.alpha = 1;
			this.emptybag1.alpha = 1;
			this.emptybag2.alpha = 1;
			this.emptybag3.alpha = 1;
			this.emptybag4.alpha = 1;
			this.emptybag5.alpha = 1;
			this.emptybag6.alpha = 1;
			this.emptybag7.alpha = 1;
			this.emptybag8.alpha = 1;
			this.emptybag9.alpha = 1;
			data.invenOpen.play();
		}
		else {
			this.background1.alpha = 0;
			this.emptybag1.alpha = 0;
			this.emptybag2.alpha = 0;
			this.emptybag3.alpha = 0;
			this.emptybag4.alpha = 0;
			this.emptybag5.alpha = 0;
			this.emptybag6.alpha = 0;
			this.emptybag7.alpha = 0;
			this.emptybag8.alpha = 0;
			this.emptybag9.alpha = 0;
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
	actionOnClick(pointer) {
		console.log('You just clicked: ' + arguments[0].key);
	}
}