// Theme switching

const toggleBtn = document.querySelectorAll(".active__toggle div");

toggleBtn.forEach(theme => {
	theme.addEventListener("click", () => {
		const activeToggle = document.querySelectorAll(".active");
		const body = document.body;
		activeToggle[0].className = activeToggle[0].className.replace(
			"active",
			"transparent"
		);
		theme.classList.add("active");
		if (theme.classList.contains("transparent")) {
			theme.classList.remove("transparent");
		}
		body.className = theme.id;
	});
});

// Math

const numberButtons = document.querySelectorAll(".number");
const additionButton = document.querySelector(".addition");
const subtractionButton = document.querySelector(".subtraction");
const divisionButton = document.querySelector(".division");
const multiplicationButton = document.querySelector(".multiplication");
const equalSign = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear__all");
const currentResult = document.querySelector(".current__result p");
const previousResult = document.querySelector(".previous__result p");

let result = "";

equalSign.addEventListener("click", showResult);
clearButton.addEventListener("click", clearScreen);
numberButtons.forEach(button => {
	button.addEventListener("click", displayNumbers);
});
deleteButton.addEventListener("click", clearAll);

function displayNumbers() {
	if (this.textContent == "." && currentResult.innerHTML.includes(".")) return;
	if (this.textContent == "." && currentResult.innerHTML.includes("."))
		return (currentResult.innerHTML = "0");

	currentResult.innerHTML += this.textContent;
}

