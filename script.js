// =============================
// KOFGYES Plumbing Service v2.0
// =============================

// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click", ()=>{

        navMenu.classList.toggle("active");

    });

}

// Close menu after clicking a link

const links = document.querySelectorAll(".nav-menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });


});// ===== Scroll Animation =====

const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll(){

    fadeElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(top < screen - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// ===== WhatsApp Booking Form =====

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const inputs = bookingForm.querySelectorAll("input, textarea");

        const name = inputs[0].value;
        const phone = inputs[1].value;
        const email = inputs[2].value;
        const location = inputs[3].value;
        const problem = inputs[4].value;

        const message =
`Hello KOFGYES Plumbing Service,

My Name: ${name}

Phone: ${phone}

Email: ${email}

Location: ${location}

Plumbing Problem:
${problem}`;

        const url =
"https://wa.me/233550219648?text=" + encodeURIComponent(message);

        window.open(url, "_blank");

    });

}
// ===== PWA Install =====

let deferredPrompt;

const installBanner = document.getElementById("installBanner");
const installBtn = document.getElementById("installBtn");
const closeInstall = document.getElementById("closeInstall");

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

    installBanner.style.display = "flex";

});

installBtn.addEventListener("click", async () => {

    installBanner.style.display = "none";

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

});

closeInstall.addEventListener("click", () => {

    installBanner.style.display = "none";

});
// ===== Register Service Worker =====

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./sw.js")
            .then(() => {

                console.log("Service Worker registered successfully!");

            })
            .catch((error) => {

                console.log("Service Worker registration failed:", error);

            });

    });

}