/* =================================
   MOBILE NAVIGATION MENU
================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/* =================================
   CLOSE MOBILE MENU AFTER CLICKING
   A NAVIGATION LINK
================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =================================
   SCROLL REVEAL ANIMATION
================================= */

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    section.classList.add("reveal");
});


const revealSections = () => {

    sections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }

    });

};


/* Run animation when scrolling */

window.addEventListener("scroll", revealSections);


/* Run once when page loads */

revealSections();


/* =================================
   DARK / LIGHT MODE
================================= */

const themeToggle =
    document.getElementById("theme-toggle");


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");


        /* Check which theme is active */

        if (
            document.body.classList.contains(
                "light-theme"
            )
        ) {

            /* Light mode */

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            /* Dark mode */

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });


    /* =================================
       LOAD SAVED THEME
    ================================= */

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        themeToggle.textContent = "🌙";

    } else {

        themeToggle.textContent = "☀️";

    }

}