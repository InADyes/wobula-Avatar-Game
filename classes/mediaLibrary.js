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
		this.emptybag = (game.load.image('emptybag', 'imgs/emptybag.png'));

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

		this.char1Full = (game.load.image('char1Full', 'imgs/char1Full.png'));
		this.char1Head = (game.load.image('char1Head', 'imgs/char1Head.png'));
		this.char1Chest = (game.load.image('char1Chest', 'imgs/char1Chest.png'));
		this.char1Pelvis = (game.load.image('char1Pelvis', 'imgs/char1Pelvis.png'));
		this.char1ArmL = (game.load.image('char1ArmL', 'imgs/char1ArmL.png'));
		this.char1ArmR = (game.load.image('char1ArmR', 'imgs/char1ArmR.png'));
		this.char1LegL = (game.load.image('char1LegL', 'imgs/char1LegL.png'));
		this.char1LegR = (game.load.image('char1LegR', 'imgs/char1LegR.png'));

		this.char2Full = (game.load.image('char2Full', 'imgs/char2Full.png'));
		this.char2Head = (game.load.image('char2Head', 'imgs/char2Head.png'));
		this.char2Chest = (game.load.image('char2Chest', 'imgs/char2Chest.png'));
		this.char2Pelvis = (game.load.image('char2Pelvis', 'imgs/char2Pelvis.png'));
		this.char2ArmL = (game.load.image('char2ArmL', 'imgs/char2ArmL.png'));
		this.char2ArmR = (game.load.image('char2ArmR', 'imgs/char2ArmR.png'));
		this.char2LegL = (game.load.image('char2LegL', 'imgs/char2LegL.png'));
		this.char2LegR = (game.load.image('char2LegR', 'imgs/char2LegR.png'));

		this.charPirateFull = (game.load.image('charPirateFull', 'imgs/charPirateFull.png'));
		this.charPirateHead = (game.load.image('charPirateHead', 'imgs/charPirateHead.png'));
		this.charPirateChest = (game.load.image('charPirateChest', 'imgs/charPirateChest.png'));
		this.charPiratePelvis = (game.load.image('charPiratePelvis', 'imgs/charPiratePelvis.png'));
		this.charPirateArmL = (game.load.image('charPirateArmL', 'imgs/charPirateArmL.png'));
		this.charPirateArmR = (game.load.image('charPirateArmR', 'imgs/charPirateArmR.png'));
		this.charPirateLegL = (game.load.image('charPirateLegL', 'imgs/charPirateLegL.png'));
		this.charPirateLegR = (game.load.image('charPirateLegR', 'imgs/charPirateLegR.png'));

		this.charSpiderFull = (game.load.image('charSpiderFull', 'imgs/charSpiderFull.png'));
		this.charSpiderHead = (game.load.image('charSpiderHead', 'imgs/charSpiderHead.png'));
		this.charSpiderChest = (game.load.image('charSpiderChest', 'imgs/charSpiderChest.png'));
		this.charSpiderPelvis = (game.load.image('charSpiderPelvis', 'imgs/charSpiderPelvis.png'));
		this.charSpiderArmL = (game.load.image('charSpiderArmL', 'imgs/charSpiderArmL.png'));
		this.charSpiderArmR = (game.load.image('charSpiderArmR', 'imgs/charSpiderArmR.png'));
		//this.charSpiderLegL = (game.load.image('charSpiderLegL', 'imgs/charSpiderLegL.png'));
		//this.charSpiderLegR = (game.load.image('charSpiderLegR', 'imgs/charSpiderLegR.png'));
	}
	addSounds() {
		this.jump = game.add.audio('jump');
		this.invenOpen = game.add.audio('invenOpen');
		this.invenClose = game.add.audio('invenClose');
	}
}