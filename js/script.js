// Back to Top Button Functionality
const backToTopButton = document.getElementById("back-to-top")

// Show the button when the user scrolls down 300px
window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		backToTopButton.style.display = "flex"
	} else {
		backToTopButton.style.display = "none"
	}
})

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth", // Smooth scrolling effect
	})
})

// Theme Toggle Functionality
const toggleButton = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")
const currentTheme = localStorage.getItem("theme")

// Set the initial theme and icon
if (currentTheme === "light") {
	document.body.classList.add("light-mode")
	themeIcon.classList.replace("fa-moon", "fa-sun")
}

toggleButton.addEventListener("click", () => {
	document.body.classList.toggle("light-mode")
	const isLightMode = document.body.classList.contains("light-mode")

	// Update the icon
	if (isLightMode) {
		themeIcon.classList.replace("fa-moon", "fa-sun")
	} else {
		themeIcon.classList.replace("fa-sun", "fa-moon")
	}

	// Save the theme preference
	localStorage.setItem("theme", isLightMode ? "light" : "dark")
})
