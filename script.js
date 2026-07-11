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