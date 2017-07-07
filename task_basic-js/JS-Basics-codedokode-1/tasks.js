"use strict";

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
