


/* ================================
   1) OPEN FORM
   ================================= */
function openForm(itemName, btnElement) {
    document.getElementById("selectedItem").value = itemName;

    const popup = document.getElementById("courseForm");
    popup.style.display = "flex";

    window.currentButton = btnElement;
}


/* ================================
   2) CLOSE FORM
   ================================= */
function closeForm() {
    document.getElementById("courseForm").style.display = "none";
}


/* ================================
   5) NAVBAR LINKS (FIXED ✅)
   ================================= */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Smooth scroll ONLY for section links
        if (href && href.startsWith("#")) {
            e.preventDefault();

            const targetSection = document.querySelector(href);
            if (!targetSection) return;

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        }
        // Page links (html) will open normally
    });
});


/* ================================
   6) SCROLL REVEAL (FADE-UP)
   ================================= */
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => fadeObserver.observe(el));


/* ================================
   7) CLICK OUTSIDE TO CLOSE FORM
   ================================= */
document.getElementById("courseForm").addEventListener("click", function (e) {
    if (e.target === this) {
        closeForm();
    }
});


/* ================================
   8) ON LOAD
   ================================= */
window.addEventListener("load", function () {
    // ready
});