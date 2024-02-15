class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tiger = new Tiger();

console.log(tiger);