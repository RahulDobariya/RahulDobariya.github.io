const menu = document.getElementById("sidemenu");
const menuToggle = document.getElementById("menu-toggle");
const themeToggle = document.getElementById("toggle");

function setMenuOpen(isOpen) {
    menu.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

themeToggle.addEventListener("click", () => {
    const isLight = document.body.dataset.theme !== "light";
    document.body.dataset.theme = isLight ? "light" : "dark";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeToggle.querySelector("span").textContent = isLight ? "☼" : "◐";
});
