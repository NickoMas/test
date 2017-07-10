"use strict";
/*********TASK№1*********/



/*********TASK№11*********/

const dataTask_11 = [{
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

const inputTask_11 = function () {
	
	return	`<form id="task_11">
		  awsomeSortAndCutFunction(<input type="text" maxlength=2 size="3" placeholder={0,10}>)<br>
		  <input class="Submit_11" type="submit" value="Gimme an answer!">
		</form>`;	
}

const outputTask_11 = function (value) {

	value.preventDefault();

	let presetData = +value.target[0].value//+value.target[0].value;

	if(	!presetData								||
		isNaN(presetData)						||
		!isFinite(presetData)					||
		(presetData !== parseInt(presetData))	||
		(presetData < 0 || presetData > 10 ) ) {
			return output.innerHTML = "Введите нормально и всё вам будет."
		}

	let arrayWithList = [];

	let output_array = dataTask_11.sort((a,b) => b.population - a.population)
									.slice(0, presetData)
									.forEach((item) => {
												arrayWithList.push(`<li>Город: ${item.city}, 
																		страна: ${item.country}, 
																		население: ${item.population}`);
											})

	// output_array = output_array.slice(0, amount);

	// output_array.forEach((item) => {
	// 	arrayWithList.push(`<li>Город: ${item.city}, страна: ${item.country}, население: ${item.population}`);
	// });

	arrayWithList.unshift(`<ul>`);
	arrayWithList.push(`</ul>`);

	return arrayWithList.join('');
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
		toppings.splice(toppings.indexOf(topping.name), 1);
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

const inputTask_12 = function () {
	
	// // let form_12 = document.getElementById("task_12");
	// // form_12.addeventlistener("click", (e) => console.log(e));

	// console.log(form_12)

	return `<form id="task_12">
	  <div class="size_group">
	  	<h4>Size does matter</h4>
		<input type="radio" name="size" value="Small">Small burger
		<input type="radio" name="size" value="Large">Large burger
		<input type="text" value="">
	  </div>
	  <div class="stuffing_group">
	  	<h4>Stuff it</h4>
		<input type="radio" name="stuffing" value="Cheese">Cheese
		<input type="radio" name="stuffing" value="Salad">Salad
		<input type="radio" name="stuffing" value="Potato">Potato
	  </div>
	  <div class="topping_group">
	  	<h4>Top it</h4>
		<input type="radio" name="top" value="Mayo">Mayo
		<input type="radio" name="top" value="Spice">Spice
	  </div>
	  <div class="control">
	  	<h4>Order your delicious burger</h4>
		<input type="submit" value="Gimme my burger!" title="Mmmmmm...yummy!">
	  </div>
	</form>`;

}
const outputTask_12 = function (value) {

	value.preventDefault();
	
	let presetData = value.target.value;
	console.log(presetData);
	let hamburgerArgs = [];

	// switch (presetData) {
	// 	case "Small burger":
	// 		hamburgerArgs.push(Hamburger.SIZE_SMALL);
	// 		return "You chose small one";
	// 	case "Large burger":
	// 		hamburgerArgs.push(Hamburger.SIZE_LARGE);
	// 		return "You chose large one";
	// }
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
		default: 
			return objectType.call(val).slice(8, -1).toLowerCase();
	}
}


/*********TASK№15**************/

 const shallowCopy = function (copied) {

	let objectType = Object.prototype.toString;

 	switch (objectType.call(copied).slice(8,-1).toLowerCase()) {
 		case "array":
 			return Object.assign([], copied);
 		case "date":
 			return new Date(copied.getTime());
 		default:
 			return Object.assign({},copied);
 	}
 }


/*********TASK№16**************/

const deepCopy = function (copied) {
	let deeplyCloned = JSON.parse(JSON.stringify(copied));

	for(let item in deeplyCloned) {
		if(typeof deeplyCloned[item] === "string") {
			
			let stringToDate = new Date(deeplyCloned[item]);
			let dateStringValue = stringToDate.valueOf();

			if (!isNaN(dateStringValue)) {
				deeplyCloned[item] = stringToDate;
			}
		}
	}

	return deeplyCloned;
}