// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

// Enable dark mode by default
document.body.classList.add("dark-theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});


// Smooth Scroll for anchor links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Validation
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = form.querySelectorAll("input, textarea, select");
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#ccc";
    }
  });
  if (valid) {
    alert("Thank you! Your message has been sent.");
    form.reset();
  }
});

// Typed Text Animation
const typedText = document.querySelector(".typed-text");
const phrases = [
  "B.Tech Student",
  "AI & ML Enthusiast",
  "Full-Stack Learner"
];
let phraseIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  currentText = isDeleting
    ? currentPhrase.substring(0, letterIndex--)
    : currentPhrase.substring(0, letterIndex++);

  typedText.textContent = currentText;

  if (!isDeleting && letterIndex === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 60 : 100);
  }
}
type();



// AOS Init
AOS.init({ duration: 800, once: true });

