/* script.js */

// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Portfolio Image Modal
const portfolioImages = document.querySelectorAll(".portfolio-gallery img");
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

portfolioImages.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.add("open");
    const modalImg = document.createElement("img");
    modalImg.src = image.src;
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.appendChild(modalImg);
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.hash);
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
