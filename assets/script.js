const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

const onScroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", onScroll);

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

onScroll();
