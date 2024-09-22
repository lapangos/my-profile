// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑ Top";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.padding = "10px";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.backgroundColor = "#4e54c8";
scrollToTopBtn.style.color = "#fff";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none";

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
