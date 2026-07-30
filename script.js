// ===== MOBILE MENU =====

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });

    }

});
// ===== SCROLL REVEAL =====

const reveals = document.querySelectorAll(
".about, .services, .why-us, .gallery, .stats, .testimonials, .faq, .contact, .booking, .service-area"
);

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ===== STATS COUNTER =====

const counters = document.querySelectorAll(".stat-box h2");

function runCounters(){

    counters.forEach(counter=>{

        const target = parseInt(counter.innerText);

        if(isNaN(target)) return;

        let count = 0;

        const speed = target / 80;

        const update = ()=>{

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

}

const statsSection = document.querySelector(".stats");

let counterStarted = false;

if (statsSection) {

    window.addEventListener("scroll", () => {

        if (counterStarted) return;

        const top = statsSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            counterStarted = true;
            runCounters();

        }

    });

}
// ===== FAQ ACCORDION =====

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if(question){

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {
                if(faq !== item){
                    faq.classList.remove("active");
                }
            });

            item.classList.toggle("active");

        });

    }

});

// ===== CALLBACK FORM =====

const callbackForm = document.getElementById("callbackForm");

if(callbackForm){

    callbackForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Thank you! We'll call you back shortly.");

        callbackForm.reset();

    });

}
// ===== EMAILJS BOOKING =====

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send("service_3dbl88d", "template_ybtij4c", {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            location: document.getElementById("location").value,
            message: document.getElementById("message").value
        })

        .then(() => {

            alert("✅ Booking request sent successfully!");

            bookingForm.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send booking. Please try again.");

        });

    });

}