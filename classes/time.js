class gameTime {
	constructor(min, max) {
		this.currentTime = game.time.time;
		this.spawnLast = 0;
		this.timeToSpawn = game.rnd.integerInRange(10000, 20000);
		this.min = min;
		this.max = max;
	}
	spawnTimer(ripples, rig) {
		this.currentTime = game.time.time;
		if (rig.lineOut == 0) {
			if (this.currentTime - this.spawnLast > this.timeToSpawn) {
				this.timeToSpawn = game.rnd.integerInRange(this.min, this.max);
				this.spawnLast = this.currentTime;
				if (ripples)
					ripples.destroy();
				game.target = null;
				return (1);
			}
		}
		return (0);
	}
}