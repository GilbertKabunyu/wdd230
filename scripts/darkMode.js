const modeButton = document.querySelector("#darkmode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🔆")) {
		main.style.background = "#000";
		main.style.color = "#03C03C";
		modeButton.textContent = "🌕";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🔆";
	}
});

