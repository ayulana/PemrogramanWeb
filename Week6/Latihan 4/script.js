var dataMerk = {
  desktop: ["Dell", "HP", "Acer", "Lenovo"],
  laptop: ["Asus", "Acer", "Lenovo", "Apple"],
  smartphone: ["Samsung", "Xiaomi", "Oppo", "iPhone"]
};

var jenis = document.getElementById("jenis");
var merk = document.getElementById("merk");
var hasil = document.getElementById("hasil");

jenis.onchange = function () {
  merk.length = 1;
  hasil.textContent = "";

  var daftar = dataMerk[jenis.value];
  if (daftar) {
    for (var i = 0; i < daftar.length; i++) {
      merk.options[merk.options.length] = new Option(daftar[i], daftar[i]);
    }
  }
};

merk.onchange = function () {
  if (merk.value !== "") {
    hasil.textContent = "Anda memilih " + jenis.options[jenis.selectedIndex].text + " merk " + merk.value;
  } else {
    hasil.textContent = "";
  }
};