"use strict"

const mainInput = document.querySelector(".enterMAC");
const inputReg = /[a-z\u0430-\u044f\d:]+/ig;



const validateInput = function (event) {
	let input = event.target.value;

	const allowReg = function (string) {
		if (input.search(inputReg) != -1) {
			input = input;
		} else {
			event.target.blur();
			mainInput.focus();
		}
	}

	const delimit = function (inputPart) {
		if (inputPart.length === 2) {

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

	allowReg(event)
	delimit(input)

	if(~input.indexOf(":")) {
		let splitted = input.split(":");

		delimit(splitted[splitted.length - 1])

	}
}

mainInput.addEventListener("input", validateInput)
