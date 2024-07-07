const navToggle = document.querySelector(".mobile-nav-toggle");
const headerNav = document.querySelector(".header-nav");
const headerWrapper = document.querySelector(".header-wrapper");
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
    toggleVisibility(headerNav);
    toggleVisibility(headerWrapper);
    toggleVisibility(overlay);
    toggleAriaExpanded(navToggle);
});

overlay.addEventListener('click', () => {
    closeMenu();
});

function toggleVisibility(element) {
    const visibility = element.getAttribute("data-visible") === "false" ? "true" : "false";
    element.setAttribute("data-visible", visibility);
}

function toggleAriaExpanded(element) {
    const expanded = element.getAttribute("aria-expanded") === "false" ? "true" : "false";
    element.setAttribute("aria-expanded", expanded);
}

function closeMenu() {
    headerNav.setAttribute("data-visible", "false");
    headerWrapper.setAttribute("data-visible", "false");
    overlay.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
}

document.addEventListener('DOMContentLoaded', () => {
   const getScootinBtn = document.getElementById('get-scootin-btn');
   const downloadAppSection = document.getElementById('download-app');

   getScootinBtn.addEventListener('click', (e) => {
       e.preventDefault();
       downloadAppSection.scrollIntoView({ behavior: 'smooth' });
   });
});
