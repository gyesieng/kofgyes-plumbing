// =====================================================
// KOFGYES PLUMBING SERVICE
// SCRIPT V3.0
// Developed for Version 3 Website
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("KOFGYES PLUMBING SERVICE - Script V3 Loaded");

// ==========================================
// SMOOTH SCROLLING
// ==========================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });
// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < window.innerHeight - revealPoint) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

// Run once when the page loads
revealOnScroll();
});
    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll("#navMenu a").forEach(link => {

            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });

        });

    }

});