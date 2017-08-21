"use strict"

const mainInput = document.querySelector(".enterMAC");
const inputReg = /[a-za-я\d:]+/ig; //[a-za-я\d:]+

document.querySelector(".kick").addEventListener("input", (e) => {
	console.log(e)
	//if(true) return e.target.value = e.target.value.slice(0,-1);
})

const validateInput = function (event) {
	let input = event.target.value;

	const transliterate = function (value) {//e.data

		//input is latin -> terminate function
		if(/\w/gi.test(value)) {
			return;
		}

		let tranTable = {
			cyrillic: ["А", "В", "Е", "К", "М", "О", "С", "Т"],
			latin: ["A", "B", "E", "K", "M", "O", "C", "T"]
		};

		let reg = new RegExp (`${value}`, `ig`);

		//if input complies with any of letters from cyrillic array,
		//replace data with corresponding analogue of latin letters 
		if(tranTable["cyrillic"].some( (item, index) => reg.test(item))) {
			let cyrIndex = tranTable["cyrillic"].indexOf(value);
			event.target.value.replace(value, tranTable["latin"][cyrIndex]);
		} else {
			event.target.value = event.target.value.slice(0, -1)
		}
	}

	const allowReg = function () {
		if (event.data.search(inputReg) !== -1) {
			event.target.value = event.target.value;
		} else {
			event.target.value = event.target.value.slice(0, -1)
		}
	}

	const delimit = function (inputPart) {
		if (inputPart.length === 2) {
console.log('ok')
			if(input.length === 17) {
				mainInput.value = mainInput.value.toUpperCase()
				return mainInput.readOnly = true;
			}

			mainInput.value += ":";
			mainInput.value = mainInput.value.toUpperCase()
			event.target.blur();
			mainInput.focus();
		}
	}

	transliterate(event.data)
	allowReg();
	delimit(input)

	if(~input.indexOf(":")) {
		let splitted = input.split(":");

		delimit(splitted[splitted.length - 1])

	}
}

mainInput.addEventListener("input", validateInput)
