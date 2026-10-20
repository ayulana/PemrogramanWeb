var daftarNama = JSON.parse(localStorage.getItem("daftarNama")) || [];

var inputNama = document.getElementById("nama");
var listSaran = document.getElementById("saran");

inputNama.addEventListener("input", function () {
  var kata = inputNama.value.toLowerCase();
  listSaran.innerHTML = "";

  if (kata === "") {
    listSaran.style.display = "none";
    return;
  }

  for (var i = 0; i < daftarNama.length; i++) {
    if (daftarNama[i].toLowerCase().indexOf(kata) === 0) {
      var li = document.createElement("li");
      li.textContent = daftarNama[i];
      li.onclick = pilihNama;
      listSaran.appendChild(li);
    }
  }

  listSaran.style.display = listSaran.children.length > 0 ? "block" : "none";
});

function pilihNama() {
  inputNama.value = this.textContent;
  listSaran.style.display = "none";
}

function simpanNama(nama) {
  for (var i = 0; i < daftarNama.length; i++) {
    if (daftarNama[i].toLowerCase() === nama.toLowerCase()) {
      return;
    }
  }
  daftarNama.push(nama);
  localStorage.setItem("daftarNama", JSON.stringify(daftarNama));
}

document.getElementById("formRegistrasi").addEventListener("submit", function (e) {
  e.preventDefault();
  var nim = document.getElementById("nim").value;
  var matkul = document.getElementById("matkul").value;
  var dosen = document.getElementById("dosen").value;

  if (inputNama.value === "" || nim === "" || matkul === "" || dosen === "") {
    document.getElementById("hasil").innerHTML = "<b style='color:red'>Semua data harus diisi!</b>";
    return;
  }

  simpanNama(inputNama.value.trim());

  document.getElementById("hasil").innerHTML =
    "<b>Data berhasil dikirim:</b><br>" +
    "Nama: " + inputNama.value + "<br>" +
    "NIM: " + nim + "<br>" +
    "Mata Kuliah: " + matkul + "<br>" +
    "Dosen: " + dosen;
});