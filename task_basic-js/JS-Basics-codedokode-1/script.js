"use strict";

let taskNameSpan = document.querySelector("span.taskName");
let input = document.querySelector("div.input");
let output = document.querySelector("div.output");

const shiftTasks = function (name) {
	taskNameSpan.innerHTML = `<a href="https://gist.github.com/codedokode/ce30e7a036f18f416ae0#%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BA%D0%B8-%D0%BD%D0%B0-js" target="_blank">${name}</a>`;
	input.innerHTML = tasks[name].input;
	tasks[name].output();
};

const tasksList = ["Task_11", "Task_12", "Task_13", "Task_14", "Task_15", "Task_16"];

const tasks = {
	Task_11: {
		input: inputTask_11,
		output: outputTask_11
	}
};

input.addEventListener("submit", (event) => {
	event.preventDefault();
	tasks[document.querySelector(".taskName a").innerHTML].output(+event.target[0].value, false);
})

window.addEventListener("load", () => {
	shiftTasks(tasksList[0])
});

