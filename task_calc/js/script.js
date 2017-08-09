
let selects = [...document.querySelectorAll("select")];

//shift active selections
const shift = function () {
	selects.forEach((item) => {
		item.disabled = !item.disabled;
		item[0].selected = !item[0].selected;
	})
}

//check if finite number
const isNumber = function (num) {
	return  typeof num === "number"
				&& isFinite(num)
				&& !isNaN(num)
};

//create 'option' tag, fill with data pulled out from query
const createOptions = function (item) {
	let option = document.createElement("option");
	option.innerHTML = `${item['Cur_Abbreviation']} - ${item['Cur_Name']}`;
	option.setAttribute('_Code', `${item['Cur_Code']}`);
	option.setAttribute('_ID', `${item['Cur_ID']}`);
	return option;
}

//main counting logic
const count = function (e) {
	e.preventDefault();
	//check active selection, selected option, fetch data with pulled params, display
	selects.forEach((select) => {
		if(!select.disabled) {
			[...select.children].forEach((innerEl) => {
				if(innerEl.selected) {

					if(document.querySelector("input.value").value &&
					 isNumber(+document.querySelector("input.value").value)) {
						var inputValue = +document.querySelector("input.value").value;
					}

					var currencyAmount;
					var bynmultiplier = 1;

					//specify value set in to count amount
					if (inputValue) {
						currencyAmount = +inputValue;
						bynmultiplier = +inputValue;
					} else {
						currencyAmount = 1;
					}
					
					//fetch possible urls and display data
					const sendQuery = function (date) {

						var fetchList;

						//specify fetchList if date is set
						if (date) {
							fetchList = [fetch(`https://www.nbrb.by/API/ExRates/Rates/${innerEl.getAttribute('_ID')}?onDate=${date}`)];
						} else {
							fetchList = [
								fetch(`https://www.nbrb.by/API/ExRates/Rates/${innerEl.getAttribute('_Code')}?ParamMode=1`), 
								fetch(`https://www.nbrb.by/API/ExRates/Rates/${innerEl.innerText.slice(0,3)}?ParamMode=2`),
								fetch(`https://www.nbrb.by/API/ExRates/Rates/${innerEl.getAttribute('_ID')}`)
							];
						}

						//3 possible queries to send
						return Promise.race(fetchList)
							.then(response => {
								if(response.status === 200) {
									return response.json();
								} else if (response.status === 404) {
									return;
								}
							})
							.then(item => {

								if (!inputValue) {
									inputValue = item['Cur_Scale']
								}

								//if direct - we count course as "X BYN in Y Currency"
								if (select.getAttribute('_direct') === 'false') {
									document.querySelector('.output').value = `${(+item['Cur_OfficialRate'] * currencyAmount).toFixed(4) } BYN / ${item['Cur_Scale'] * inputValue } ${item['Cur_Abbreviation']}`
								//if reverse - we count as "X Currency in 1 BYN"
								} else if (select.getAttribute('_direct') === 'true') {
									document.querySelector('.output').value = `${(bynmultiplier * item['Cur_Scale'] / item['Cur_OfficialRate']).toFixed(4)} ${item['Cur_Abbreviation']} / ${bynmultiplier} BYN`								
								}
							})
							.catch(a => {
								document.querySelector('.output').value = "Currency is unavailable"
							})
						
					}

					if(innerEl.value === "BYN") {
						return document.querySelector('.output').value = "1"
					}

					if(e.target.children[0].value) {
						sendQuery(e.target.children[0].value)
					} else {
						sendQuery()
					}
				}
			})
		}
	})
}

document.forms.cur.addEventListener("submit", count)

fetch("https://www.nbrb.by/API/ExRates/Currencies")
	.then(a => a.json())
	.then(a => a.forEach((item) => {
		//fill every select element with created options
		selects.forEach((innerEl) => {
			innerEl.appendChild(createOptions(item))
		})
	}))
