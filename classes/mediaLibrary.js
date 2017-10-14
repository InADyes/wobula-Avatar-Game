class mediaLibrary {
	constructor() {
		this.baseURL = (game.load.baseURL = 'http://0.0.0.0:8000/');
		this.crossOrigin = (game.load.crossOrigin = 'anonymous');
		this.background = (game.load.image('background', 'imgs/twitchBackground.png'));
		this.bgCoreGrassy = (game.load.image('bgCoreGrassy', 'imgs/bgCore.png'));
		this.bgTopGrassy = (game.load.image('bgTopGrassy', 'imgs/bgTop.png'));

		this.blood1 = (game.load.image('bloodDrop1', 'imgs/bloodDrop1.png'));
		this.blood2 = (game.load.image('bloodDrop2', 'imgs/bloodDrop2.png'));
		this.blood3 = (game.load.image('bloodDrop3', 'imgs/bloodDrop3.png'));
		this.blood4 = (game.load.image('bloodDrop4', 'imgs/bloodDrop4.png'));

		this.jumpSound = (game.load.audio('jump', 'sounds/jump.mp3'));

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

		this.charDemonFull = (game.load.image('charDemonFull', 'imgs/charDemonFull.png'));
		this.charDemonHead = (game.load.image('charDemonHead', 'imgs/charDemonHead.png'));
		this.charDemonHeadL = (game.load.image('charDemonHeadL', 'imgs/charDemonHeadL.png'));
		this.charDemonHeadR = (game.load.image('charDemonHeadR', 'imgs/charDemonHeadR.png'));
		this.charDemonChest = (game.load.image('charDemonChest', 'imgs/charDemonChest.png'));
		this.charDemonPelvis = (game.load.image('charDemonPelvis', 'imgs/charDemonPelvis.png'));
		this.charDemonArmL = (game.load.image('charDemonArmL', 'imgs/charDemonArmL.png'));
		this.charDemonArmR = (game.load.image('charDemonArmR', 'imgs/charDemonArmR.png'));
		this.charDemonLegL = (game.load.image('charDemonLegL', 'imgs/charDemonLegL.png'));
		this.charDemonLegR = (game.load.image('charDemonLegR', 'imgs/charDemonLegR.png'));
		this.charDemonWingL = (game.load.image('charDemonWingL', 'imgs/charDemonWingL.png'));
		this.charDemonWingR = (game.load.image('charDemonWingR', 'imgs/charDemonWingR.png'));
	}
	addSounds() {
		this.jump = game.add.audio('jump');
	}
}