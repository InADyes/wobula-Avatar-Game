function random(max, min) {
	var test = Math.floor((Math.random() * max) + min);
	return (test);
}

function strncmp(first, second, length) {
	return first.substring(0, length) == second.substring(0, length);
}

function addListeners() {
	listener('head');
	listener('chest');
	listener('right arm');
	listener('left arm');
	listener('pelvis');
	listener('right leg');
	listener('left leg');
}

function listener(bodypart) {
	var element = {};

	element.char = document.getElementById(bodypart).value;
	element.event = document.getElementById(bodypart);
	element.change = document.getElementById("display");
	element.event.addEventListener('change', function() {
		console.log(this.value);
		if (this.value != 'default') {
			element.change.src = "../imgs/" + this.value + ".png";
			if (bodypart == 'head')
				avatar.characterHead.loadTexture(this.value);
			else if (bodypart == 'chest')
				avatar.characterChest.loadTexture(this.value);
			else if (bodypart == 'right arm')
				avatar.characterArm1.loadTexture(this.value);
			else if (bodypart == 'left arm')
				avatar.characterArm2.loadTexture(this.value);
			else if (bodypart == 'pelvis')
				avatar.characterPelvis.loadTexture(this.value);
			else if (bodypart == 'right leg')
				avatar.characterLeg1.loadTexture(this.value);
			else if (bodypart == 'left leg')
				avatar.characterLeg2.loadTexture(this.value);
		}
	}, false);
}