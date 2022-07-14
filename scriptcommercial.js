window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (screen.width >= 992) return;
    if (document.documentElement.scrollTop > screen.height * 0.8) {
        document.getElementById("headerBar").style.top = "0%";
    } else {
        document.getElementById("headerBar").style.top = "-100%";
    }
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("navOverlay").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("navOverlay").style.height = "0%";
}