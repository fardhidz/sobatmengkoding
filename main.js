window.onload = function () {
	console.log("hello world");
	document.getElementById("menuButton").onclick = menuClick;
};

// Menu button click event handler
function menuClick() {
	document.getElementsByClassName("list-menu")[0].classList.toggle("show");
	document.getElementsByClassName("navbar")[0].classList.toggle("full-height");
	document.getElementsByClassName("home-menu")[0].classList.toggle("active");
	document.body.classList.toggle("remove-scrolling");
	document.getElementsByClassName("mark")[0].classList.toggle("show");
	document.getElementsByClassName("mark")[0].classList.toggle("hidden");
	document.getElementsByClassName("bar")[0].classList.toggle("show");
	document.getElementsByClassName("bar")[0].classList.toggle("hidden");
}

// Add shadow to navbar when scrolling
window.addEventListener("scroll", (e) => {
	const nav = document.getElementById("navbar");
	if (window.pageYOffset > 50) {
		nav.classList.add("add-shadow");
	} else {
		nav.classList.remove("add-shadow");
	}
});
