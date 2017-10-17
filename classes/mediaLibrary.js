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
		//blood particle
		this.blood1 = (game.load.image('bloodDrop1', 'imgs/bloodDrop1.png'));
		this.blood2 = (game.load.image('bloodDrop2', 'imgs/bloodDrop2.png'));
		this.blood3 = (game.load.image('bloodDrop3', 'imgs/bloodDrop3.png'));
		this.blood4 = (game.load.image('bloodDrop4', 'imgs/bloodDrop4.png'));
		
		
		//tiger
		this.tigerhead = (game.load.image('tigerhead', 'imgs/Tiger/Tiger_Head.png'));
		this.tigerheadmove = (game.load.image('tigerheadmove', 'imgs/Tiger/Tiger_Head__L_Side.png'));
		this.tigerfrontleg1 = (game.load.image('tigerfrontleg1', 'imgs/Tiger/Tiger_FrontLeg.png'));
		this.tigerfrontleg2 = (game.load.image('tigerfrontleg2', 'imgs/Tiger/Tiger_FrontLeg.png'));
		this.tigerbackleg1 = (game.load.image('tigerbackleg1', 'imgs/Tiger/Tiger_BackLeg.png'));
		this.tigerbackleg2 = (game.load.image('tigerbackleg2', 'imgs/Tiger/Tiger_BackLeg.png'));
		this.tigerbody = (game.load.image('tigerbody', 'imgs/Tiger/Tiger_Body1.png'));
		this.tigertail = (game.load.image('tigertail', 'imgs/Tiger/Tiger_Tail.png'));
		
		//lion
		this.lionhead = (game.load.image('lionhead', 'imgs/Lion/Lion_Head.png'));
		this.lionheadmove = (game.load.image('lionheadmove', 'imgs/Lion/Lion_ProfileHead.png'));
		this.lionfrontleg1 = (game.load.image('lionfrontleg1', 'imgs/Lion/Lion_FrontLeg.png'));
		this.lionfrontleg2 = (game.load.image('lionfrontleg2', 'imgs/Lion/Lion_FrontLeg.png'));
		this.lionbackleg1 = (game.load.image('lionbackleg1', 'imgs/Lion/Lion_BackLeg.png'));
		this.lionbackleg2 = (game.load.image('lionbackleg2', 'imgs/Lion/Lion_BackLeg.png'));
		this.lionbody = (game.load.image('lionbody', 'imgs/Lion/Lion_Body.png'));
		this.liontail = (game.load.image('liontail', 'imgs/Lion/Lion_Tail.png'));



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
		this.char1HeadLeft = (game.load.image('char1HeadLeft', 'imgs/char1HeadLeft.png'));
		this.char1HeadRight = (game.load.image('char1HeadRight', 'imgs/char1HeadRight.png'));
		this.char1Chest = (game.load.image('char1Chest', 'imgs/char1Chest.png'));
		this.char1Pelvis = (game.load.image('char1Pelvis', 'imgs/char1Pelvis.png'));
		this.char1ArmL = (game.load.image('char1ArmL', 'imgs/char1ArmL.png'));
		this.char1ArmR = (game.load.image('char1ArmR', 'imgs/char1ArmR.png'));
		this.char1LegL = (game.load.image('char1LegL', 'imgs/char1LegL.png'));
		this.char1LegR = (game.load.image('char1LegR', 'imgs/char1LegR.png'));
		//duck?
		this.duckhead = (game.load.image('duckhead', 'imgs/duck/head.png'));
		this.duckbody = (game.load.image('duckbody', 'imgs/duck/body.png'));
		this.duckarm1 = (game.load.image('duckarm1', 'imgs/duck/left_arm.png'));
		this.duckarm2 = (game.load.image('duckarm2', 'imgs/duck/right_arm.png'));
		this.duckleg1 = (game.load.image('duckleg1', 'imgs/duck/left_leg.png'));
		this.duckleg2 = (game.load.image('duckleg2', 'imgs/duck/right_leg.png'));

		this.blueHead = (game.load.image('blueHead', 'imgs/blueGuy/8Bit_head.png'));
		this.blueBody = (game.load.image('blueBody', 'imgs/blueGuy/8Bit_body.png'));
		this.blueArm1 = (game.load.image('blueArm1', 'imgs/blueGuy/8Bit_L_Arm.png'));
		this.blueArm2 = (game.load.image('blueArm2', 'imgs/blueGuy/8Bit_R_Arm.png'));
		this.blueLeg1 = (game.load.image('blueLeg1', 'imgs/blueGuy/8Bit_L_Leg.png'));
		this.blueLeg2 = (game.load.image('blueLeg2', 'imgs/blueGuy/8Bit_R_Leg.png'));

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

		this.charFireFull = (game.load.image('charFireFull', 'imgs/Fire_Character/Fire_CharacterFull.png'));
		this.charFireHead = (game.load.image('charFireHead', 'imgs/Fire_Character/Fire_Head.png'));
		this.charFireHeadLeft = (game.load.image('charFireHeadLeft', 'imgs/Fire_Character/Fire_Head_Looking.png'));
		this.charFireHeadRight = (game.load.image('charFireHeadRight', 'imgs/Fire_Character/Fire_Head_Looking.png'));
		this.charFirePelvis = (game.load.image('charFirePelvis', 'imgs/Fire_Character/Fire_Pelvis.png'));
		this.charFireArmL = (game.load.image('charFireArmL', 'imgs/Fire_Character/Fire_R_Arm.png'));
		this.charFireArmR = (game.load.image('charFireArmR', 'imgs/Fire_Character/Fire_L_Arm.png'));
		this.charFireLegL = (game.load.image('charFireLegL', 'imgs/Fire_Character/Fire_L_Leg.png'));
		this.charFireLegR = (game.load.image('charFireLegR', 'imgs/Fire_Character/Fire_R_Leg.png'));

		this.charDevilFull = (game.load.image('charDevilFull', 'imgs/charDevilFull.png'));
		this.charDevilHead = (game.load.image('charDevilHead', 'imgs/charDevilHead.png'));
		this.charDevilChest = (game.load.image('charDevilChest', 'imgs/charDevilChest.png'));
		//this.charFireHeadLeft = (game.load.image('charFireHeadLeft', 'imgs/Fire_Character/Fire_Head_Looking.png'));
		//this.charFireHeadRight = (game.load.image('charDevilHeadRight', 'imgs/Fire_Character/Fire_Head_Looking.png'));
		this.charDevilPelvis = (game.load.image('charDevilPelvis', 'imgs/charDevilPelvis.png'));
		this.charDevilArmL = (game.load.image('charDevilArmL', 'imgs/charDevilArmL.png'));
		this.charDevilArmR = (game.load.image('charDevilArmR', 'imgs/charDevilArmR.png'));
		this.charDevilLegL = (game.load.image('charDevilLegL', 'imgs/charDevilLegL.png'));
		this.charDevilLegR = (game.load.image('charDevilLegR', 'imgs/charDevilLegR.png'));
		this.charDevilWingL = (game.load.image('charDevilWingL', 'imgs/charDevilWingL.png'));
		this.charDevilWingR = (game.load.image('charDevilWingR', 'imgs/charDevilWingR.png'));
	}
	addSounds() {
		this.jump = game.add.audio('jump');
		this.invenOpen = game.add.audio('invenOpen');
		this.invenClose = game.add.audio('invenClose');
	}
}