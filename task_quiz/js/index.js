let contentBlock = document.querySelector(".content");
let toReadBlock = document.querySelector(".toRead");
let textStatus = document.querySelector(".textStatus");
let arrow = document.querySelector(".navArrow");

const modifyStyle = function (el, prop) {
	return +getComputedStyle(el)[prop];
}

const shiftBlocks = function() {
	if ( +modifyStyle(contentBlock, "opacity")) {
		contentBlock.style.opacity = 0;
		contentBlock.style.zIndex = -1;
		textStatus.style.opacity = 0;
	
		setTimeout(() => {
			contentBlock.style.position = "absolute";		
		}, 600)

		setTimeout(() => {
			textStatus.innerHTML = "Resources to explore on point";
			toReadBlock.style.opacity = 1;
			textStatus.style.opacity = 1;
		}, 800)
		
		toReadBlock.style.zIndex = 1;

	} else if (+modifyStyle(toReadBlock, "opacity")) {
		toReadBlock.style.opacity = 0;
		toReadBlock.style.zIndex = -1;
		textStatus.style.opacity = 0;
	
		setTimeout(() => {
			textStatus.innerHTML = "Your summary";
			contentBlock.style.position = "relative";		
			contentBlock.style.zIndex = 1;
			textStatus.style.opacity = 1;
		}, 600)

		setTimeout(() => {
			contentBlock.style.opacity = 1;
		}, 800)	
	}
}

arrow.addEventListener("click", shiftBlocks)
