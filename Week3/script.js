const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
}

const elemenReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("tampil");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elemenReveal.forEach(function (el) {
    observer.observe(el);
  });
} else {
  elemenReveal.forEach(function (el) {
    el.classList.add("tampil");
  });
}

const formKontak = document.getElementById("form-kontak");

if (formKontak) {
  formKontak.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const subjek = encodeURIComponent("Pesan dari website - " + nama);
    const isi = encodeURIComponent("Nama: " + nama + "\nEmail: " + email + "\n\n" + pesan);
    window.location.href = "mailto:smanamsurabaya@yahoo.com?subject=" + subjek + "&body=" + isi;
  });
}
