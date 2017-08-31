// //ES5
var Dog = function (name) {
	this.name = name
}

Dog.prototype.getName = function() {
	return this.name;
};

Dog.prototype.bark = function () {
	return `Dog ${this.name} is barking`
}

//ES6

class Dog {
	constructor(name){
		this.name = name
	}

	getName () {
		return this.name
	}

	bark () {
		return `Dog ${this.name} is barking`
	}
}