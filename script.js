const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("active");

menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
);

menuToggle.textContent = isOpen ? "✕" : "☰";

});

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    menuToggle.textContent = "☰";
});

});

// Automatically update the footer year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
    
    // =========================
// SCROLL REVEAL ANIMATIONS
// =========================

const revealElements = document.querySelectorAll(
".services-section, .work-section, .about-section, .contact-section, .service-card, .project-card, .contact-card"
);

revealElements.forEach(function (element) {
element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
function (entries, observer) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add("active");
observer.unobserve(entry.target);
}
});
},
{
threshold: 0.15
}
);

revealElements.forEach(function (element) {
revealObserver.observe(element);
});

