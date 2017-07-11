"use strict";

let taskNameSpan = document.querySelector("span.taskName");
let input = document.querySelector("div.input");
let output = document.querySelector("div.output");
let navButtons = document.querySelector(".pagination");

const dir_backwards = "bwd";
const dir_forward = "fwd";

let taskIndex = 0;

// const shiftTasks = function (name) {
// 	taskNameSpan.innerHTML = `<a href="https://gist.github.com/codedokode/ce30e7a036f18f416ae0#%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BA%D0%B8-%D0%BD%D0%B0-js" target="_blank">${name}</a>`;
// 	input.innerHTML = tasks[name].input;
// 	tasks[name].output();
// };

const step = function (dir) {

	if(dir === "bwd") {
		if(!taskIndex) {
			return taskIndex = tasks.length-1;
		}
		taskIndex -= 1;
	} else if (dir === "fwd") {
		if(taskIndex === tasks.length-1) {
			return taskIndex = 0;
		}
		taskIndex += 1;
	}

	taskNameSpan.innerHTML = `<a href="https://gist.github.com/
							codedokode/ce30e7a036f18f416ae0#%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BA%D0%B8-
							%D0%BD%D0%B0-js" target="_blank">${tasks[taskIndex].name}</a>`;

	input.innerHTML = tasks[taskIndex].input();
	output.innerHTML = "";

}

const outputSomething = function (value) {
 	output.innerHTML = tasks[taskIndex].output(value);
}

const tasks = [
	{
		name: "Task_11",
		input: inputTask_11,
		output: outputTask_11
	},
	{
		name: "Task_12",
		input: inputTask_12,
		output: outputTask_12
	},	
	// {
	// 	name: "Task_13",
	// 	input: inputTask_13,
	// 	output: outputTask_13
	// },
	// {
	// 	name: "Task_14",
	// 	input: inputTask_14,
	// 	output: outputTask_14
	// },
	// {
	// 	name: "Task_15",
	// 	input: inputTask_15,
	// 	output: outputTask_15
	// },	
	// {
	// 	name: "Task_16",
	// 	input: inputTask_16,
	// 	output: outputTask_16
	// }
];

input.addEventListener("submit", (event) => {
	//event.preventDefault();
	outputSomething(event);
	//tasks[document.querySelector(".taskName a").innerHTML].output(+event.target[0].value, false);
})

navButtons.addEventListener("click", (event) => {
	
	let target = event.target.classList;

	if(target.contains("reverse")) {
		step(dir_backwards)
	} else if (target.contains("forward")) {
		step(dir_forward)
	}
})

window.addEventListener("load", () => {
	step();
});
