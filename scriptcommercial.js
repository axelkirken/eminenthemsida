/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (screen.width >= 992) return;
    if (document.documentElement.scrollTop > screen.height * 0.8) {
        document.getElementById("headerBar").style.top = "0%";
    } else {
        document.getElementById("headerBar").style.top = "-100%";
    }
} */


const menuButton = document.getElementById("menu-button");
const navOverlay = document.getElementById("navOverlay");
const navOverlayContent = document.getElementById("navOverlayContent");

/* Open when someone clicks on the span element */
const openNav = () => {
    navOverlay.style.height = "100%";
    navOverlayContent.style.top = "25%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
const closeNav = () => {
    navOverlay.style.height = "0%";
    navOverlayContent.style.top = "0%";
}

menuButton.addEventListener("click", openNav)

/* Formulär */

const formSuccess = () => {
    contactForm.classList.add("form-hide");
    thankYou.classList.remove("form-hide");
    contactForm.reset();
    /* setTimeout(() => {
        contactForm.classList.remove("form-hide");
        thankYou.classList.add("form-hide");
    }, 5000); */
}

const formFailure = () => {
    alert("Ojdå, något gick visst fel. Skriv gärna till oss på vår e-post info@eminentfilm.se istället!")
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.site = "Commercial";

    fetch("https://xiwpkasq5c.execute-api.eu-north-1.amazonaws.com/final/contact-us", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => formSuccess())
    .catch(err => formFailure())
}

const contactForm = document.getElementById("contact-form");
const thankYou = document.getElementById("thankYou");
contactForm.addEventListener("submit", handleSubmit);

