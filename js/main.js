// For The NavBar toggle
const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw Error(
		`Please double check your class name, there is no ${selector} class`
	);
};

const links = getElement(".nav-links");
const navBtn = getElement(".nav-btn");

navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

// To get the current Year for the footer
const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
