const toggleBtn = document.querySelectorAll(".active__toggle div");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

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
		body.className = currentTarget.id;
	});
});
