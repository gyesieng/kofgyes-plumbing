// =====================================================
// KOFGYES PLUMBING SERVICE
// SCRIPT V3.0
// Developed for Version 3 Website
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("KOFGYES PLUMBING SERVICE - Script V3 Loaded");

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