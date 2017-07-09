"use strict";
/*********TASK№1*********/



/*********TASK№11*********/

const tasksData_11 = [{
	city: "Нью-Йорк",
	country: "США",
	population: 21445000
}, {
	city: "Джакарта",
	country: "Индонезия",
	population: 31760000
},  {
	city: "Сеул",
	country: "Южная Корея",
	population: 24105000
}, {
	city: "Дели",
	country: "Индия",
	population: 26495000
}, {
	city: "Карачи",
	country: "Пакистан",
	population: 23545000
}, {
	city: "Манила",
	country: "Филиппины",
	population: 24245000
}, {
	city: "Шанхай",
	country: "Китай",
	population: 23390000
}, {
	city: "Токио",
	country: "Япония",
	population: 37900000
},  {
	city: "Сан-Паулу",
	country: "Бразилия",
	population: 20850000
}, {
	city: "Мумбаи",
	country: "Индия",
	population: 22885000
}];

const inputTask_11 =
		`<form id="clause">
		  awsomeSortAndCutFunction(<input type="text" maxlength=2 size="3" placeholder={0,10}>)<br>
		  <input type="submit" value="Gimme an answer!">
		</form>`;

const outputTask_11 = function (amount = 10, defaultOrder=true) {

	if(	!amount	 					  ||
		isNaN(amount)    			  ||
		!isFinite(amount)			  ||
		(amount !== parseInt(amount)) ||
		(amount < 0 || amount > 10 ) ) {
			return output.innerHTML = "Введите нормально и всё вам будет."
		}

	let arrayWithList = [];

	let output_array = !defaultOrder ? tasksData_11.sort((a,b) => b.population - a.population) : tasksData_11;

	output_array = output_array.slice(0, amount);

	output_array.forEach((item) => {
		arrayWithList.push(`<li>Город: ${item.city}, страна: ${item.country}, население: ${item.population}`);
	});

	arrayWithList.unshift(`<ul>`);
	arrayWithList.push(`</ul>`);

	output.innerHTML = arrayWithList.join('');
};

/*********TASK№12**************/

function Hamburger (size, stuffing) {
	if(!size || !stuffing ) {
		throw new HamburgerException(`no size or stuffing were given`);
	} else if (size.type !== "size") {
		throw new HamburgerException(`invalid size`);
	} else if (stuffing.type !== "stuffing") {
		throw new HamburgerException(`invalid stuffing`);
	}

	this.size = size.type;
	this.stuffing = stuffing.name;
	this.toppings = [];
	this.price = size.price;
	this.calority = size.calority;
}

function HamburgerException (message) {
	this.message = message;
}

Hamburger.SIZE_SMALL = {
	name: "s_small",
	type: "size",
	price: 50,
	calority: 20
};
;
Hamburger.SIZE_LARGE = {
	name: "s_large",
	type: "size",
	price: 100,
	calority: 40
};
Hamburger.STUFFING_CHEESE = {
	name: "stf_cheese",
	type: "stuffing",
	price: 10,
	calority: 20
};
Hamburger.STUFFING_SALAD = {
	name: "stf_salad",
	type: "stuffing",
	price: 20,
	calority: 5
};
Hamburger.STUFFING_POTATO = {
	name: "stf_potato",
	type: "stuffing",
	price: 15,
	calority: 10
};
Hamburger.TOPPING_MAYO = {
	name: "tp_mayo",
	type: "topping",
	price: 20,
	calority: 5
};
Hamburger.TOPPING_SPICE = {
	name: "tp_spice",
	type: "topping",
	price: 15,
	calority: 0
};

Hamburger.prototype.addTopping = function (topping) {

	if (!this.toppings.includes(topping.name) &&
	 	topping.type === "topping" ) {
		this.toppings.push(topping.name);
		this.price += topping.price;
		this.calority += this.calority;
	} else {
		throw new HamburgerException(`duplicate topping ${topping.name}`);
	}
};

Hamburger.prototype.removeTopping = function (topping) {

	let toppings = this.toppings;

	if (toppings.includes(topping.name)) {
		toppings.splice(toppings.indexOf(topping.name),1);
		this.price -= topping.price;
		this.calority -= this.calority;
	} else {
		throw new HamburgerException(`no such topping: ${topping.name}`);
	}
};

Hamburger.prototype.getToppings = function () {
	return this.toppings;
};

Hamburger.prototype.getSize = function () {
	return this.size;
}

Hamburger.prototype.getStuffing = function () {
	return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
	return this.price;
}

Hamburger.prototype.calculateCalories = function () {
	return this.calority;
}


/*********TASK№13**************/

function ElectroStation() {

}


/*********TASK№14**************/

const defineVar = function (val) {

	if(val === null) return "null";

	let objectType = Object.prototype.toString;

	switch (typeof val) {
		case "undefined":
			return "undefined";
		case "boolean":
			return "boolean";
		case "null":
			return "null";
		case "number":
			return "number";
		case "string":
			return "string";
		case "function":
			return "function";
		case "array":
			return "array";
		case "object":
			if (val[0] && val.length) {
				return "array-like"
			}
			return objectType.call(val).slice(8, -1).toLowerCase();
		default: return objectType.call(val).slice(8, -1).toLowerCase();
	}
}
