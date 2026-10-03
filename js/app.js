/* =========================================================
   KOFGYES PLUMBING SERVICE
   Main Website JavaScript
   ========================================================= */

const WHATSAPP_NUMBER = "233550219648";
const PRIMARY_PHONE = "+233550219648";


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mainNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        String(new Date().getFullYear());

}


/* =========================================================
   WHATSAPP
   ========================================================= */

/**
 * Opens WhatsApp with a prepared message.
 *
 * @param {string} message
 */

function openWhatsApp(message) {

    const encodedMessage =
        encodeURIComponent(message);


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   MOBILE CALL BUTTON
   ========================================================= */

const mobileCall =
    document.getElementById("mobileCall");


if (mobileCall) {

    mobileCall.href =
        `tel:${PRIMARY_PHONE}`;

}


/* =========================================================
   MOBILE WHATSAPP BUTTON
   ========================================================= */

const mobileWhatsApp =
    document.getElementById("mobileWhatsApp");


if (mobileWhatsApp) {

    mobileWhatsApp.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            openWhatsApp(
                "Hello KOFGYES PLUMBING SERVICE, I would like to make a plumbing service enquiry."
            );

        }
    );

}


/* =========================================================
   SERVICE REQUEST FORM
   ========================================================= */

const serviceForm =
    document.getElementById("serviceForm");

const formStatus =
    document.getElementById("formStatus");


if (serviceForm) {

    serviceForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const location =
                document
                    .getElementById("location")
                    .value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            const preferredDate =
                document
                    .getElementById("preferredDate")
                    .value
                    .trim();


            if (
                !name ||
                !phone ||
                !location ||
                !service ||
                !message
            ) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please complete all required fields.";

                }

                return;

            }


            const whatsappMessage =
`Hello KOFGYES PLUMBING SERVICE,

I would like to request a plumbing service.

Name: ${name}

Phone Number: ${phone}

Location: ${location}

Service: ${service}

Job Details:
${message}

Preferred Date / Time:
${preferredDate || "Not specified"}

Thank you.`;


            if (formStatus) {

                formStatus.textContent =
                    "Opening WhatsApp...";

            }


            openWhatsApp(whatsappMessage);

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (!mainNav || !menuToggle) {
            return;
        }


        const clickedInsideMenu =
            mainNav.contains(event.target);


        const clickedToggle =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mainNav.classList.contains("active")
        ) {

            mainNav.classList.remove("active");


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   ESCAPE KEY CLOSES MOBILE MENU
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            mainNav &&
            mainNav.classList.contains("active")
        ) {

            mainNav.classList.remove("active");


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);
          
