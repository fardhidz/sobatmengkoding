window.onload = function() {
    console.log("hello world");

    document.getElementById("menu-bar").onclick = function() {
        document.getElementsByClassName("list-menu")[0].classList.toggle("show");
        document.getElementsByClassName("navbar")[0].classList.toggle("full-height");
        document.getElementsByClassName("home-menu")[0].classList.toggle("active");
    }
    
}

window.addEventListener("scroll", (e) => {
	const nav = document.getElementById("navbar");
	if (window.pageYOffset > 50) {
		nav.classList.add("add-shadow");
	} else {
		nav.classList.remove("add-shadow");
	}
});