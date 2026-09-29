const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");
 
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
}
 
const elemenReveal = document.querySelectorAll(".reveal");
 
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("tampil");
        observer.unobserve(entry.target); 
    });
  },
  { threshold: 0.15 }
);
 
elemenReveal.forEach(function (el) {
  observer.observe(el);
});
 
