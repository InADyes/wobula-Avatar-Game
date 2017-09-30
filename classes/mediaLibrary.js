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
		this.jumpSound = (game.load.audio('jump', 'sounds/jump.mp3'));
		this.jump;	
	}
	addSounds() {
		this.jump = game.add.audio('jump');
	}
}