function random(max, min) {
	var test = Math.floor((Math.random() * max) + min);
	return (test);
}

function strncmp(first, second, length) {
	return first.substring(0, length) == second.substring(0, length);
}