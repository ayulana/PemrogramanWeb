const elemenReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("tampil");
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.10 }
);

elemenReveal.forEach(function (el) {
  observer.observe(el);
});
