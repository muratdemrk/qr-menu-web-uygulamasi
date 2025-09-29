let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY <= 0) {
        header.classList.remove("hide");
    } else if (window.scrollY > lastScrollY) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = function() {
        navbar.classList.toggle("active");
    };
    window.addEventListener("scroll", function() {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active"); 
        }
    });
});
