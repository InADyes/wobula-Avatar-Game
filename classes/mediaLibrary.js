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
		particlesource.push('bloodDrop1', 'bloodDrop2', 'bloodDrop3', 'bloodDrop4');
		
		
		
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
		this.char1Head = (game.load.image('char1Head', 'imgs/test_avatars1/head.png'));
		this.char1HeadLeft = (game.load.image('char1HeadLeft', 'imgs/test_avatars/char1HeadLeft.png'));
		this.char1HeadRight = (game.load.image('char1HeadRight', 'imgs/test_avatars/char1HeadRight.png'));
		this.char1Chest = (game.load.image('char1Chest', 'imgs/test_avatars1/body.png'));
		this.char1Pelvis = (game.load.image('char1Pelvis', ''));
		this.char1ArmL = (game.load.image('char1ArmL', 'imgs/test_avatars1/arm2.png'));
		this.char1ArmR = (game.load.image('char1ArmR', 'imgs/test_avatars1/arm1.png'));
		this.char1LegL = (game.load.image('char1LegL', 'imgs/test_avatars1/leg1.png'));
		this.char1LegR = (game.load.image('char1LegR', 'imgs/test_avatars1/leg2.png'));
		//duck?
		this.duckhead = (game.load.image('duckhead', 'imgs/duck/head.png'));
		this.duckbody = (game.load.image('duckbody', 'imgs/duck/body.png'));
		this.duckarm1 = (game.load.image('duckarm1', 'imgs/duck/left_arm.png'));
		this.duckarm2 = (game.load.image('duckarm2', 'imgs/duck/right_arm.png'));
		this.duckleg1 = (game.load.image('duckleg1', 'imgs/duck/left_leg.png'));
		this.duckleg2 = (game.load.image('duckleg2', 'imgs/duck/right_leg.png'));




		this.char2Full = (game.load.image('char2Full', 'imgs/char2Full.png'));
		this.char2Head = (game.load.image('char2Head', 'imgs/piratehead.png'));
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
		this.charSpiderLegLBack1 = (game.load.image('charSpiderLegLBack1', 'imgs/charSpiderLegLBack1.png'));
		this.charSpiderLegLBack2 = (game.load.image('charSpiderLegLBack2', 'imgs/charSpiderLegLBack2.png'));

		this.charSpiderLegRBack1 = (game.load.image('charSpiderLegRBack1', 'imgs/charSpiderLegRMiddle1.png'));
		this.charSpiderLegRBack2 = (game.load.image('charSpiderLegRBack2', 'imgs/charSpiderLegRBack2.png'));

		this.charSpiderLegRMiddle1 = (game.load.image('charSpiderLegRMiddle1', 'imgs/charSpiderLegRMiddle1.png'));
		this.charSpiderLegRMiddle2 = (game.load.image('charSpiderLegRMiddle2', 'imgs/charSpiderLegRMiddle2.png'));
		this.charSpiderLegLMiddle1 = (game.load.image('charSpiderLegLMiddle1', 'imgs/charSpiderLegLMiddle1.png'));
		this.charSpiderLegLMiddle2 = (game.load.image('charSpiderLegLMiddle2', 'imgs/charSpiderLegLMiddle2.png'));
		this.charSpiderLegRFront1 = (game.load.image('charSpiderLegRFront1', 'imgs/charSpiderLegRFront1.png'));
		this.charSpiderLegRFront2 = (game.load.image('charSpiderLegRFront2', 'imgs/charSpiderLegRFront2.png'));
		this.charSpiderLegLFront1 = (game.load.image('charSpiderLegLFront1', 'imgs/charSpiderLegLFront1.png'));
		this.charSpiderLegLFront2 = (game.load.image('charSpiderLegLFront2', 'imgs/charSpiderLegLFront2.png'));
	}
	addSounds() {
		this.jump = game.add.audio('jump');
		this.invenOpen = game.add.audio('invenOpen');
		this.invenClose = game.add.audio('invenClose');
	}
}