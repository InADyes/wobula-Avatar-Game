class mediaLibrary {
	constructor() {
		this.baseURL = (game.load.baseURL = 'http://0.0.0.0:8000/');
		this.crossOrigin = (game.load.crossOrigin = 'anonymous');
		this.background = (game.load.image('background', 'imgs/twitchBackground.png'));
		this.stickAvatar = (game.load.image('stick', 'imgs/stick.png'));
		this.bgCoreGrassy = (game.load.image('bgCoreGrassy', 'imgs/bgCore.png'));
		this.bgTopGrassy = (game.load.image('bgTopGrassy', 'imgs/bgTop.png'));
		this.inventory = (game.load.image('inventory', 'imgs/inventory.png'));
		this.menu = (game.load.image('menu', 'imgs/menu.png'));
		this.inventoryBG = (game.load.image('inventoryBG', 'imgs/inventoryBG.png'));
		this.shirt = (game.load.image('shirt', 'imgs/shirt.png'));
		this.shoes = (game.load.image('shoes', 'imgs/shoes.png'));
		this.hat = (game.load.image('hat', 'imgs/hat.png'));
		this.gloves = (game.load.image('gloves', 'imgs/gloves.png'));
		this.pants = (game.load.image('pants', 'imgs/pants.png'));

		this.blood1 = (game.load.image('bloodDrop1', 'imgs/bloodDrop1.png'));
		this.blood2 = (game.load.image('bloodDrop2', 'imgs/bloodDrop2.png'));
		this.blood3 = (game.load.image('bloodDrop3', 'imgs/bloodDrop3.png'));
		this.blood4 = (game.load.image('bloodDrop4', 'imgs/bloodDrop4.png'));

		this.jumpSound = (game.load.audio('jump', 'sounds/jump.mp3'));
		this.invenOpenSound = (game.load.audio('invenOpen', 'sounds/invenClose.wav'));
		this.invenCloseSound = (game.load.audio('invenClose', 'sounds/invenOpen.wav'));
		this.jump;
		this.invenOpen;
		this.invenClose;

		this.testHead = (game.load.image('stickHead', 'imgs/stickHead.png'));
		this.testChest = (game.load.image('stickChest', 'imgs/stickChest.png'));
		this.testTorso = (game.load.image('stickTorso', 'imgs/stickTorso.png'));
		this.testArm1 = (game.load.image('stickArm1', 'imgs/stickArm1.png'));
		this.testArm2 = (game.load.image('stickArm2', 'imgs/stickArm2.png'));
		this.testLeg1 = (game.load.image('stickLeg1', 'imgs/stickLeg1.png'));
		this.testLeg2 = (game.load.image('stickLeg2', 'imgs/stickLeg2.png'));
	}
	addSounds() {
		this.jump = game.add.audio('jump');
		this.invenOpen = game.add.audio('invenOpen');
		this.invenClose = game.add.audio('invenClose');
	}
}