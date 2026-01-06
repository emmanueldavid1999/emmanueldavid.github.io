// Smooth scroll to contact section
document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

// Scroll reveal animation
const sections = document.querySelectorAll(".section");

const revealSections = () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
revealSections();
