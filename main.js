window.onload = function() {
    console.log("hello world");
}

window.addEventListener("scroll", (e) => {
	const nav = document.getElementById("navbar");
	if (window.pageYOffset > 50) {
		nav.classList.add("add-shadow");
	} else {
		nav.classList.remove("add-shadow");
	}
});